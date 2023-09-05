
function sub(num1, num2, callBack) {
    let result = num1 - num2;
    return callBack(result);
}

function displayConsole(result){
    console.log(result);
}

function calculateSubtract() {
    if (isNaN) {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        sub(num1,num2,displayResult);
    }else{
        
    }  
}

function displayResult(result) {
    document.getElementById("result").innerHTML = "Result: " + result;

}