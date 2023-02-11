let calculator = document.getElementById("calculator");
let buttons= Array.from(document.querySelectorAll("button"))
let screen = document.getElementById("answer")
let screenValue = ""; 
let numbers = ["1","2","3","4","5","6","7","8","9","0"]
let operators = ["+", "-", "/", "*", "%",];

const addition = (operand1, operand2) => operand1 + operand2;
const subtraction = (operand1, operand2) => operand1 - operand2;
const multiplication = (operand1, operand2) => operand1 * operand2;
const division = (operand1, operand2) => operand1 / operand2;
const percentage = (operand1) => operand1 / 100;
const minusMax = (operand1) => operand1 * (-1)


function operate(operand1, operator, operand2) {
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
operate();

buttons.forEach(button=>{
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let buttonPress = event.target.innerText;
        if (buttonPress == "A/C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonPress == "Back"){
            screenValue = screenValue.slice(0,-1)
            screen.value = screenValue
        }
        else if(buttonPress === "=" && screenValue.indexOf("/0") != -1){
            screenValue = "ERR0R!!!"
            screen.value = screenValue
        }
        else if(buttonPress === "." && screenValue.indexOf(".") != -1){
            screen.value = screenValue;
        } 
        else if(buttonPress == "+/-"){
            screen.value = operate(screenValue, "+/-", "")
            screenValue = screen.value

        }
        else if(buttonPress == "%"){
           screen.value = operate(screenValue, "%", "")
           screenValue = screen.value

        }
        else if(buttonPress === "="){
            let calculation = screenValue.split('');
            let operation, answer, operand1, operand2;
            for (let i = 0; i < calculation.length; i++) {
                if (calculation[i] === "/" || calculation[i] === '*' || calculation[i] === "+" || calculation[i] === "-") {
                    let operationPos = calculation.indexOf(calculation[i]);
                    operation = calculation[i];
                    operand1 = parseFloat(calculation.slice(0, operationPos).join(''));
                    operand2 = parseFloat(calculation.slice(operationPos + 1).join(''));
                    answer = operate(operand1, operation, operand2);
                    screen.value = (answer);
                    screenValue = screen.value
                    console.log(screenValue);

                  }
                }
            }

        else{
            screenValue += buttonPress;
            screen.value = screenValue
        }
    })
})

buttons.forEach(keys=>{
    keys.addEventListener("keydown", function(event) {
        let keypress = event.key
        numbers.forEach(number => {
            if(keypress == number){
                screenValue += (keypress);
                screen.value = screenValue;
            }
        })
           
        operators.forEach(operator => {
        if(keypress == operator){
                screenValue += keypress;
                screen.value = screenValue;
                console.log(keypress);
            }
        })

        if(keypress === "." && screenValue.indexOf(".") != -1){
            screen.value = screenValue;
        } 
        else if(keypress === "Enter" && screenValue.indexOf("/0") != -1){
            screenValue = "ERR0R!!!"
            screen.value = screenValue
        }
        else if(keypress === "Enter"){
            let calculation = screenValue.split('');
            let operation, answer, operand1, operand2;
            for (let i = 0; i < calculation.length; i++) {
                if (calculation[i] === "/" || calculation[i] === '*' || calculation[i] === "+" || calculation[i] === "-") {
                    let operationPos = calculation.indexOf(calculation[i]);
                    operation = calculation[i];
                    operand1 = parseFloat(calculation.slice(0, operationPos).join(''));
                    operand2 = parseFloat(calculation.slice(operationPos + 1).join(''));
                    answer = operate(operand1, operation, operand2);
                    screen.value = (answer);
                    screenValue = screen.value
                    console.log(screenValue);
                }
           }
        }
        else if(keypress === "%"){
            screen.value = operate(parseFloat(screenValue), "%", "")
            screenValue = screen.value

        }
        else if (keypress == "Backspace"){
            screenValue = screenValue.slice(0,-1)
            screen.value = screenValue
        }
        else if (keypress == "Escape"){
            screenValue = "";
            screen.value = screenValue;
        }
       
    })
})