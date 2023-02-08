let calculator = document.getElementById("calculator");
let buttons= Array.from(document.querySelectorAll("button"))
let screen = document.getElementById("answer")
let screenValue = ""; 
let numbers = [1,2,3,4,5,6,7,8,9,0]
let operators = ["+", "-", "/", "*", "%"]

buttons.forEach(keys=>{
    keys.addEventListener("keydown", function(event) {
        let keypress = event.key
        numbers.forEach(number => {
            if(keypress == number){
                screenValue += keypress;
                screen.value = screenValue;
            }
        })
           
        operators.forEach(operator => {
            if(keypress == operator){
                screenValue += keypress;
                screen.value = screenValue;
            }
        })

        if(keypress == "." && screenValue.indexOf(".") != -1){
            screen.value = screenValue;
        } 
        else if(keypress == "Enter" && screenValue.indexOf("/0") != -1){
            screenValue = "ERR0R!!!"
            screen.value = screenValue
        }
        else if(keypress == "Enter"){
            screen.value = eval(screenValue)
            screenValue = screen.value
        }
        else if(keypress == "%"){
            screen.value = eval(screenValue / 100)
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
        else if (keypress == "-" && screenValue.indexOf("-") == -1){
            screen.value = eval(screenValue * -1)
            screenValue = screen.value
        }
    })
})

buttons.forEach(buttons=>{
    buttons.addEventListener("click", function(event) {
        let buttonText = event.target.innerText;
        if (buttonText == "A/C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "Back"){
            screenValue = screenValue.slice(0,-1)
            screen.value = screenValue
        }
        else if(buttonText == "=" && screenValue.indexOf("/0") != -1){
            screenValue = "ERR0R!!!"
            screen.value = screenValue
        }      
        else if(buttonText == "="){
            screen.value = eval(screenValue)
            screenValue = screen.value
        }
        else if(buttonText == "+/-"){
            screen.value = eval(screenValue * -1)
            screenValue = screen.value
        }
        else if(buttonText == "%"){
            screen.value = eval(screenValue / 100)
            screenValue = screen.value
        }
        
        else if(buttonText == "." && screenValue.indexOf(".") != -1){
            screen.value = screenValue;
        }
         else{
        screenValue += buttonText;
        screen.value = screenValue;
        }
    })
})
