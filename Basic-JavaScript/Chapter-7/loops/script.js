var text = document.getElementById("myText");
var radius = window.prompt("Enter Radius of Circle: ");
while (rad)
var result = calculate();

text.innerHTML = "Result: " + result;
function calculate(){
    return Math.PI * Math.pow(radius, 2);
}