import { modal } from "./dialog.js";

//for quote
const textElement = document.getElementById("text");
//for author 
const authorElement = document.getElementById("author");
//generate button
const buttonElement = document.getElementById("generateBtn");
//copy clip board
const clipboardBtn = document.getElementById("clipboardBtn");

document.addEventListener("DOMContentLoaded", () => {
    randomQuote();

})

function randomQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            textElement.innerHTML = `<i class="quote quote-left fa-solid fa-quote-left"></i> ${result.content} <i class="quote quote-right fa-solid fa-quote-right"></i>`;
            authorElement.innerHTML = `- ${result.author}`
            console.log(result)
        });
}
function copyTextToClipBoard() {
    const textCopy = `"${textElement.textContent.trim()}" ${authorElement.textContent}`;
    navigator.clipboard.writeText(textCopy)
        .then(() => {
            modal.show();
        })
        .catch(error => {
            alert("Failed to copy the quote");
        })
}
buttonElement.addEventListener("click", randomQuote);
clipboardBtn.addEventListener("click", copyTextToClipBoard);