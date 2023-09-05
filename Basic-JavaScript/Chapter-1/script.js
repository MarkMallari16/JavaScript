let firstName = "Jobert";
let lastName = "Dela Cruz";
let age = 17;

document.getElementById("fullName").innerHTML = "Full Name : " + firstName + " " +lastName;
document.getElementById("age").innerHTML = "Age : " + age;
document.getElementById("enroll").innerHTML = "Enrolled : " + true;
document.getElementById("myBtn").addEventListener("click",displayAlert);
//arithemthic operation

document.getElementById("sum").innerHTML = "Sum: " + displaySum(5,5);
document.getElementById("difference").innerHTML = "Difference: " + displayDifference(10,5);
document.getElementById("product").innerHTML = "Product: " + displayProduct(6,5);
document.getElementById("quotient").innerHTML = "Quotient: " + displayProduct(10,2);
document.getElementById("circumference").innerHTML = "Circle Circumference: " + displayCircumference(2);

function displaySum(num1,num2){
    return num1 + num2;
}
function displayDifference(num1,num2){
    return num1 - num2;
}
function displayProduct(num1,num2){
    return num1 * num2;
}
function displayQuotient(num1,num2){
    return num1 / num2;
}
function displayCircumference(radius){
    const PI = 3.14159;
    return 2 * PI * radius
}
function displayAlert(){
    window.alert('Successfully Submitted');
}