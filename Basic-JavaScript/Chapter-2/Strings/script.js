//strings method
let text = "05-12-2023";

let fullName = "Mark Mallari"
let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice(fullName.lastIndexOf(" "));
let firstIndex = fullName.indexOf("Mallari");

let date = text.replaceAll("-","/");

console.log(lastIndex);
document.getElementById("h1").innerHTML = firstName + lastName;