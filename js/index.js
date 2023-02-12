let calculator = document.getElementById('calculator');
let buttons = Array.from(document.querySelectorAll('button'));
let screen = document.getElementById('answer');
let screenValue = '';
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let operators = ['+', '-', '/', '*', '%', 'Backspace','Enter', 'Escape'];
let operand1 = 0;
let operand2 = 0;
let operator = '';

const addition = (operand1, operand2) => +operand1 + +operand2;
const subtraction = (operand1, operand2) => operand1 - operand2;
const multiplication = (operand1, operand2) => operand1 * operand2;
const division = (operand1, operand2) => operand1 / operand2;
const percentage = (operand1) => operand1 / 100;
const minusMax = (operand1) => operand1 * -1;

function operate() {
  switch (operator) {
    case '/':
      return division(operand1, operand2);
    case '*':
      return multiplication(operand1, operand2);
    case '+':
      return addition(operand1, operand2);
    case '-':
      return subtraction(operand1, operand2);
    case '%':
      return percentage(operand1);
    case '+/-':
      return minusMax(operand1);
    default:
      break;
  }
}

function prepareCalc(buttonPress, screenValue) {
  if (operator === '') {
    operator = buttonPress;
  } else {
    operand2 = screen.value;
    let total = operate();
    screen.value = total;
    operand1 = total;
    operand2 = 0;
    operator = buttonPress;
  }

  if (operand1 === 0) {
    operand1 = screenValue;
    screen.value = '';
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    takeInput(event.target.innerText);
    
  });
});

function takeInput(input) {
  switch (input) {
    case 'A/C':
      operand1 = 0;
      operand2 = 0;
      operator = '';
      screen.value = '';
      break;
      case 'Escape':
      operand1 = 0;
      operand2 = 0;
      operator = '';
      screen.value = '';
      break;
    case 'Back':
        screen.value = screen.value.slice(0, -1);
      break;
    case 'Backspace':
        screen.value = screen.value.slice(0, -1);
      break;
    case '=':
      if (screen.value === "0") {
        screen.value = 'ERR0R!!!';
      } else {
        operand2 = screen.value;
        let total = operate();
        screen.value = total;
        operand1 = total;
        operand2 = 0;
        operator = '';
      } 
      break;
    case 'Enter':
      if (screen.value === "0" ){
        screen.value = 'ERR0R!!!';
      } else {
        operand2 = screen.value;
        let total = operate();
        screen.value = total;
        operand1 = total;
        operand2 = 0;
        operator = '';
      }
      break;
    case '.':
      if (!screen.value.includes('.') && screen.value != '') {
        screen.value += '.';
      }
      break;
    case '+/-':
      screen.value = operate();
      break;
    case '%':
      screen.value = operate();
      break;
    case '/':
      prepareCalc(input, screen.value);
      break;
    case '*':
      prepareCalc(input, screen.value);
      break;
    case '-':
      prepareCalc(input, screen.value);
      break;
    case '+':
      prepareCalc(input, screen.value);
      break;
    default: {
        if (screen.value == operand1 && screen.value != '') {
            screenValue = input;
            screen.value = ScreenValue
        } else {
            screen.value = screen.value + input;
          }
    }
  }
}

buttons.forEach((keys) => {
  keys.addEventListener('keydown', function (event) {
    event.preventDefault();
    let keypress = event.key 
    if(numbers.indexOf(keypress) !== -1 || operators.indexOf(keypress) !== -1) {
        takeInput(keypress);
    }
  });
});
