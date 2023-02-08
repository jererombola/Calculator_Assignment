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
        else if(buttonText == "="){
            screen.value = eval(screenValue)
            screenValue = screen.value
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

    buttons.addEventListener("onkeydown", function(event) {
    
    
    
    
    })



})

