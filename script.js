const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const display = document.getElementsByClassName("display");
const sums = document.querySelectorAll("sums");
console.log(display[0].value);
let s = false;
// when clicking buttons
buttons.forEach((button) => {
  button.addEventListener("click", buttonClicked);
});

// what happens when button clicked
function buttonClicked(event) {
  const buttonValue = event.target.value;
  let displayArr = display[0].value.split(" ");
  console.log(displayArr);
  // checking if there is 2 sums on row
  // if (noTwoSums(displayArr)) {
  //   alert("We don't do that here IDIOT !!!");
  //   display.value = null;
  // }

  // if the user want to clear the value
  if (buttonValue === "C") {
    display.value = null;

    // if the user want to get the result of the sum
  } else if (buttonValue === "=") {
    if (display.value == null) {
      display.value = 0;
    } else {
      display.value = results(display.value);
      s = true;
    }

    // when the user still putting his equation
  } else {
    if (display.value == 0) {
      display.value = null;
    }

    if (s) {
      display.value = null;
      s = false;
    }
    display.value += buttonValue;
  }
}

// solving the equation
function results(screen) {
  // making array from the equation
  let screenArr = screen.split(" ");
  let firstNumbers = Number(screenArr[0]);
  let secondNumbers = Number(screenArr[2]);

  // checking for which Methods he want to use
  return doMathOperation(firstNumbers, secondNumbers, screenArr[1]);
}

const doMathOperation = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

// function noTwoSums(displayArr) {
//   for (let i = 0; i < 20; i++) {
//     console.log(displayArr[i]);
//     if (
//       (displayArr[i] == displayArr[i - 1] && displayArr[i] == "+") ||
//       displayArr[i] == "-" ||
//       displayArr[i] == "*" ||
//       displayArr[i] == "/"
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
