const btnCalc = document.getElementById("calculate");
btnCalc.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let resultTxt = document.getElementById("spanResult");
    

    if (isNaN(num1) || isNaN(num2)){
        alert("You must enter a number!");
    }else{
        switch (op) {
            case '+':
                resultTxt.innerHTML = "Result: " + (num1 + num2);
                break;
            case '-':
                resultTxt.innerHTML = "Result: " + (num1 - num2);
                break;
            case '*':
                resultTxt.innerHTML = "Result: " + (num1 * num2);
                break;
            case '/':
                resultTxt.innerHTML = "Result: " + (num1 / num2);
                break;
            case '%':
                resultTxt.innerHTML = "Result: " + (num1 % num2);
                break;
        }
    }
});
