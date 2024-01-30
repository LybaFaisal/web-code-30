//Basic Example
let car = { Model: "2020", Brand: "Cultus", Color: "White" };

console.log(`The model of my car is ${car["Model"]}`);

//Student Example

let Student = {
    name: "Lyba",
    age: 20,
    grade: "senior",
    uni: "TUF"
};

console.log("Student Information:");
console.log(`The name of student: ${Student.name}`);
console.log(`The age of student: ${Student.age}`);
console.log(`The grade of student: ${Student.grade}`);
console.log(`The uni of student: ${Student.uni}`);

//Product Catalog

let laptop = {
    generation: "AMD",
    price: "High",
    battery_timing: "Good",
};

console.log("Laptop Info:");
console.log(`Generation:  ${laptop.generation}`);
console.log(`Price:  ${laptop.price}`);
console.log(`Battery Timing:  ${laptop.battery_timing}`);

//Bank Info

let bank = {
    holder_name: "Max",
    acc_number: 1234,
    acc_balance: 10000
};

console.log("Bank info:");
console.log(`Holder Name: ${bank.holder_name} \nAccount Number: ${bank.acc_number} \nAccount Balance: ${bank.acc_balance}`);

//object with function

let person = {
    name: "Harry",
    age: 20,
    ID: 1234,
    full_info: function () {
        console.log(`The name of person: ${this.name} \nThe age of person: ${this.age} \nThe ID of this person: ${this.ID}`);
    }
};

person.full_info();  //call