const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const operatorsArr = ["+", "-", "*", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lastresult;

//clicking a button
buttons.forEach((button) => {
  button.addEventListener("click", buttonClicked);
});

// what happens when button clicked
function buttonClicked(event) {
  const buttonValue = event.target.value;

  // if the user want to clear the value
  if (buttonValue === "C") {
    display.value = null;

    // if the user want to get the result of the sum
  } else if (buttonValue === "=") {
    display.value = results(display.value);
    lastresult = results(display.value);

    // when the user still putting his equation
  } else {
    if (display.value == 0) {
      display.value = null;
    }

    if (display.value == lastresult && numbers.includes(buttonValue)) {
      display.value = null;
    }
    // checking if there is 2 sums on row
    display.value += buttonValue;

    // splitting the display
    let displayArr = display.value.split(" ").filter((item) => item != "");

    if (displayArr.length == 4) {
      display.value = results(display.value) + buttonValue;
    }
    if (operatorsArr.includes(displayArr[0])) {
      displayArr[1] = displayArr[0];
      displayArr[0] = 0;
      display.value = displayArr[0] + " " + displayArr[1] + " ";
    }
    if (checkingIfTwoOperatorsInRow(displayArr)) {
      displayArr[1] = null;
      displayArr[1] = displayArr[2];
      display.value = displayArr[0] + " " + displayArr[1] + " ";
    }
  }
}

// solving the equation
function results(screen) {
  // making array from the equation
  let screenArr = screen.split(" ");
  let firstNumbers = Number(screenArr[0]);
  let secondNumbers = Number(screenArr[2]);
  console.log(screenArr.length);
  if (screenArr.length == 1) {
    return screenArr[0];
  }
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

function checkingIfTwoOperatorsInRow(displayArr) {
  for (let i = 0; i < displayArr.length; i++) {
    if (
      operatorsArr.includes(displayArr[i]) &&
      operatorsArr.includes(displayArr[i - 1])
    ) {
      return true;
    }
  }
}
