let a, b;

//rest operator
// a = window.prompt("Enter a Number");
// b = window.prompt("Enter Second Number");
// c = window.prompt("Enter Third Number");
a = 5;
b = 6;
c = 6;

console.log(mul(a, b, c));

function mul(...numbers) {
    let product = 1;

    for (let number of numbers) {
        product *= number;
    }

    return product;
}