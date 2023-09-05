let myText = document.getElementById("myText");

let symbol = window.prompt("Enter Symbol: ");
let row = window.prompt("Enter Rows: ");
let col = window.prompt("Enter Columns: ");

for (let i = 1; i<=row;i++){
    for (let j = 1;j<=col;j++){
        myText.innerHTML += symbol;
    }
    myText.innerHTML += "<br>"
}