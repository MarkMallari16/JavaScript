const numbers = [1, 2, 3, 4, 5, 6];
const secNumbers = [7, 8, 9, 10, 11];
// const copiedNumbers = [...numbers,...secNumbers];
// let maximum  = Math.max(...numbers,...secNumbers);

let text = document.getElementById("text");

// const studentSection1 = ["Mallari","Bautista","Dela Cruz"];
// const studentSection2 = ["Gutierrez","Deleon","Atot"];

// studentSection1.push(...studentSection2);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}


const combinedVehicle = {...myVehicle,...updateMyVehicle};
const valuesOnly = Object.values(combinedVehicle);
console.log(...valuesOnly);
