let calculator = document.getElementById('calculator');
let buttons = Array.from(document.querySelectorAll('button'));
let screen = document.getElementById('answer');
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let operators = ['+', '-', '/', '*', '%', 'Backspace', 'Enter', 'Escape'];
let operand1 = 0;
let operand2 = 0;
let operator = '';

const addition = (operand1, operand2) => +operand1 + +operand2;
const subtraction = (operand1, operand2) => operand1 - operand2;
const multiplication = (operand1, operand2) => operand1 * operand2;
const division = (operand1, operand2) => operand1 / operand2;

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
    default:
      break;
  }
}

function resetOperator(){
  
}
function prepareCalc(buttonPress, screenValue) {
  if (operator === '' || screen.value === '') {
    operator = buttonPress;
  } 
  else {
    operand2 = screen.value;
    let total = operate();
    screen.value = total.toString().slice(0, 6);
    screenValue = total;
    operand1 = screenValue;
    operand2 = 0;
    operator = buttonPress;
  }
  if (operand1 === 0) {
    operand1 = screenValue;
    screen.value = '';
  }
}
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
      if (screen.value === '0') {
        screen.value = 'ERR0R!!!';
      } else {
        operand2 = screen.value;
        let total = operate();
        screen.value = total.toString().slice(0, 6);
        operand1 = total;
        operand2 = 0;
        operator = '';
      }
      break;
    case 'Enter':
      if (screen.value === '0') {
        screen.value = 'ERR0R!!!';
      } else {
        operand2 = screen.value;
        let total = operate();
        screen.value = total.toString().slice(0, 6);
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
      screen.value = screen.value * -1;
      break;
    case '%':
      screen.value = screen.value / 100;
      screen.value = screen.value.slice(0, 6);
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
    default:
      if (screen.value == operand1 && screen.value != '') {
        screen.value = input;
      } else {
        screen.value = screen.value + input;
      }
      break;
    }
  }


buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    let buttonPress = event.target.innerText;
    takeInput(buttonPress);
  });
});

buttons.forEach((keys) => {
  keys.addEventListener('keydown', function (event) {
    event.preventDefault();
    let keypress = event.key;
    if (
      numbers.indexOf(keypress) !== -1 ||
      operators.indexOf(keypress) !== -1
    ) {
      takeInput(keypress);
    }
  });
});
