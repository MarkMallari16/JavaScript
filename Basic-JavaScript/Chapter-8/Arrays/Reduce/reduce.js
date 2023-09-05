let prices = [5,10,12,5,8,5];


let totalPrice = prices.reduce(checkOut);

displayTotalPrice(totalPrice);

function checkOut(total,element){
    return total + element;
}

function displayTotalPrice(element){
    let text = document.getElementById("text");
    text.innerHTML = `The total purchase is: $${element}`;
}