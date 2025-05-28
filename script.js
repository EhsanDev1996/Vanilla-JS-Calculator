const displayText = document.getElementById("text");
console.log(displayText);

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

const backspace = document.querySelector(".backspace");
console.log(backspace);

const allClear = document.querySelector(".all-clear");
console.log(allClear);

const result = document.querySelector(".equal-to");
console.log(result);


const squareRoot = document.querySelector(".square-root");
console.log(squareRoot);
squareRoot.addEventListener("click", ()=>{
    displayText.innerHTML += squareRoot.innerHTML;
})


const percentage = document.querySelector(".percentage");
console.log(percentage);

percentage.addEventListener("click",()=>{
    displayText.innerHTML += percentage.innerHTML; 
    
})




buttons.forEach((button)=>{
    button.addEventListener("click",function(){
        displayText.innerHTML += button.innerHTML;


    })
})


backspace.addEventListener("click",()=>{
    displayText.innerHTML = displayText.innerHTML.slice(0,-1);
})


allClear.addEventListener("click",function(){
    displayText.innerHTML = "";
})

// calculation of final answer is here:


result.addEventListener("click",function(){
    let expression = displayText.innerHTML;


    expression = expression.replace(/%/gi , "*0.01*");//replacing percentage sign

    expression = expression.replace(/(\d+)√/g , "$1*√");// replacing number√ with "number * √"

    expression = expression.replace(/√(\d+)/g , "(Math.sqrt($1))");// replacing √number with "Math.sqrt(number)"

    

    let output = eval(expression);
    displayText.innerHTML = output;


    try {
        let output = eval(expression);
        displayText.innerHTML = output;
    } catch (error) {
        displayText.innerHTML = "Error";
    }
    
})


























