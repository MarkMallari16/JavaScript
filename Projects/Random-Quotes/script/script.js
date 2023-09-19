import { modal } from "./dialog.js";

//for quote
const textElement = document.getElementById("text");
//for author 
const authorElement = document.getElementById("author");
//generate button
const buttonElement = document.getElementById("generateBtn");
//copy clip board
const clipboardBtn = document.getElementById("clipboardBtn");
//speech to text
const speechBtn = document.getElementById("textSpeechBtn");
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    randomQuote();
})

function randomQuote() {
    buttonElement.textContent = "Loading Quote...";
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            buttonElement.textContent = "Generate"
            textElement.innerHTML = `<i class="quote quote-left fa-solid fa-quote-left"></i> ${result.content} <i class="quote quote-right fa-solid fa-quote-right"></i>`;
            authorElement.innerHTML = `- ${result.author}`
            // console.log(result)
        });
}
function copyTextToClipBoard() {
    const textCopy = `"${textElement.textContent.trim()}" ${authorElement.textContent}`;
    navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert("Quote already copied!")
        })
        .catch(error => {
            alert("Failed to copy the quote", error);
        })
}
function textToSpeech() {
    let textValue = textElement.textContent;
    let authorText = authorElement.textContent;
    let speechText = `${textValue} quote by ${authorText}`;
    let selectedVoiceName = "Microsoft David Desktop - English (United States)";
    let speech = speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(speechText);
    //set utterance
    utterance.volume = "1";
    utterance.rate = "1";
    utterance.pitch = "1";
    utterance.lang = "en-US";

    let selectedVoice = getVoice(selectedVoiceName);

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }


    speech.speak(utterance);

}
function getVoice(selectedVoiceName) {
    let voices = speechSynthesis.getVoices();
    let selectedVoice = null;

    for (let counter = 0; counter < voices.length; counter++) {
        if (voices[counter].name === selectedVoiceName) {
            selectedVoice = voices[counter];
            break;
        }
    }

    return selectedVoice;
}
buttonElement.addEventListener("click", randomQuote);
clipboardBtn.addEventListener("click", copyTextToClipBoard);
speechBtn.addEventListener("click", textToSpeech);