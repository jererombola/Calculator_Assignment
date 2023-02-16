let calculator = document.getElementById('calculator');
let buttons = Array.from(document.querySelectorAll('button'));
let screen = document.getElementById('answer');
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let operators = ['+', '-', '/', '*', '%'];
let operand1 = 0;
let operand2 = 0;
let operator = '';

const addition = (operand1, operand2) => operand1 + operand2;
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


function equals(){

  let result = operate(operand1, operand2);
  if(result === undefined || result === NaN || result === Infinity){
    screen.value = "ERROR"
  }else {
    screen.value = result
    operand1 = result
    operand2 = 0
    console.log(result);
  }
   
}

function operand(button){
  numbers.forEach(number =>{
    while(button === number){
      screen.value += button 
      break;
    }
    if(operator !==""){
      operand2 = parseFloat(screen.value);
      console.log(operand2);
    }
    else {
      operand1 = parseFloat(screen.value)
      console.log(operand1);
    }
  })
}

function clear(){
  screen.value = ""
  operand1 = 0;
  operand2 = 0;
  operator = ""
}

function back(){
    console.log(screen.value);
    screen.value = screen.value.slice(0, -1)
    operand1 = operand1.toString().slice(0,-1)
    operand1 = parseFloat(operand1)
    operand2 = operand2.toString().slice(0,-1)
    operand2 = parseFloat(operand2)
  }


function opers(button){
        if(operand2 !== 0){
          let result = operate(operand1, operand2);
          operand1 = result
          operand2 = 0
          
        } if(operand2 === 0) {
          operator = button
          screen.value = ""
        }
        
      }

buttons.forEach(clicks=> {
    clicks.addEventListener("click", event=>{
      let click = event.target.value;
      switch(click){
        case("+/-"):
          return screen.value = (screen.value * (-1))
        case("%"):
        return screen.value = (screen.value / 100)
        case "C":
          return clear()
        case "B":
          return back()
        case "*":
        case "-":
        case "+":
        case "/":
          return opers(click);
        case "=": 
          return equals(operand1, operand2);  
        default:
         operand(click)
          break;
      }
    }) 
})

buttons.forEach(keys=> {
  keys.addEventListener("keyup", event=>{
    let key = event.key;
    switch(key){
      case "Escape":
        return clear()
      case "Backspace":
        return back()
      case "*":
      case "-":
      case "+":
      case "/":
        return opers(key);
      case "Enter":
      return equals(operand1, operand2)
      case "Alt": 
        return equals(operand1, operand2);  
      default:
       operand(key)
        break;
    }
  }) 
})