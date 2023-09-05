let firstName;
let lastName;
let password;
let email;
document.getElementById("myButton").onclick = function(){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    
    console.log(firstName);
    console.log(lastName);
    console.log(email);
}

