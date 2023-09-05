const ages = [18, 5, 65, 38, 17, 23, 15];

let validAge = ages.filter(checkAge);

displayAge(validAge);

//function
function checkAge(element) {
    return element >= 18;
}

function displayAge(element){
    let text = document.getElementById("text");
    text.innerHTML = element;
}

