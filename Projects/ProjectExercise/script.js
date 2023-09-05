function likePage() {
    const buttonElement = document.getElementById("buttonElement");
    const text = document.getElementById("text");
    
    if (buttonElement.innerHTML === "Like") {
        buttonElement.innerHTML = "Liked";
        text.innerHTML = "Thank You for Like :)"
        buttonElement.style.backgroundColor = "var(--accent)";
        buttonElement.style.color = "var(--background)";
    } else {
        buttonElement.innerHTML = "Like";
        text.innerHTML = "Unlike :( "
        buttonElement.style.backgroundColor = "var(--background)";
        buttonElement.style.color = "#000";
    }
}