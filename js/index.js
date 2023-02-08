let calculator = document.getElementById("calculator");
let buttons= Array.from(document.querySelectorAll("button"))
let screen = document.getElementById("answer")
let screenValue = ""; 

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
            console.log(screenValue.indexOf("/0"));
            screenValue = "Oh no! That's not possible!"
            screen.value = screenValue
            screen.style.fontSize = "40px"
        }      
        else if(buttonText == "="){
            screen.value = eval(screenValue)
            screenValue = screen.value
        }
        else if(buttonText == "+/-"){
            screen.value = eval(screenValue * -1)
            screenValue = screen.value
        }
        
        else if(buttonText == "." && screenValue.indexOf(".") != -1){
            screen.value = screenValue;
        }
        else if(buttonText == "=" && screenValue.indexOf("/0") != -1){
            console.log(screenValue.indexOf("/0"));
            screenValue = "You can't Divide by Zero"
            screen.value = screenValue
        }        
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            console.log(screen.value);
            screen.style.fontSize = "48px"

        }
    })

    buttons.addEventListener("onkeydown", function(event) {
    
    
    
    
    })



})

