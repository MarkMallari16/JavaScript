const textField = document.getElementById("textArea");
//button
const convertBtn = document.getElementById("convertBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

const voiceSelect = document.getElementById("voiceSelect");

let utterance;
let speech;
let paused = false;

function convertTextToSpeech() {
    let textValue = textField.value;

    utterance = new SpeechSynthesisUtterance(textValue);

    speech = window.speechSynthesis;

    utterance.volume = "1";
    utterance.rate = "1";
    utterance.pitch = "1";

    let selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
    let selectedLang = selectedOption.getAttribute("data-lang");

    if (textValue.trim() === "" || textField.value.trim() === null) {
        alert('Please enter your text');
    } else {
        utterance.lang = selectedLang;
        speech.speak(utterance);
        stopBtn.textContent = "Stop";
    }

}

function getVoiceLists() {
    if (typeof speechSynthesis === "undefined") {
        return;
    }
    const voices = speechSynthesis.getVoices();

    for (let counter = 0; counter < voices.length; counter++) {
        const option = document.createElement("option");
        option.textContent = `${voices[counter].name} ${voices[counter].lang}`;

        if (voices[counter.default]) {
            option.textContent += "Default";
        }

        option.setAttribute("data-lang", voices[counter].lang);
        option.setAttribute("data-name", voices[counter].name);
        voiceSelect.appendChild(option);
    }
}
let pausePosition = 0;
function stopTextToSpeech() {
    if (utterance) {
        if (paused) {
            speech.cancel();
            speech.speak(utterance);
            speech.pause();
            speech.resume(pausePosition); // Resume speech synthesis
            paused = false;
            stopBtn.textContent = "Stop"; // Change button text back to "Stop"
        } else {
            speech.cancel(); // Stop speech synthesis
            paused = true;
            pausePosition = speech.pause();
            speech.speak(utterance);
            stopBtn.textContent = "Continue"; // Change button text to "Continue"
        }
    }

}
function resetAll() {
    textField.value = "";
}
convertBtn.addEventListener("click", convertTextToSpeech);
stopBtn.addEventListener("click", stopTextToSpeech);
resetBtn.addEventListener("click", resetAll);

if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceLists;
}

