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

//Example 2

let Student_Info = {
    Name: "Lyba",
    reg_no: 184,
    grade: 11,
    Information: function () {
        console.log(`The name of Student: ${this.Name} \nThe reg_no of person: ${this.reg_no} \nThe Grade of this person: ${this.grade}`);
    }
};
Student_Info.Information();

//....Don't use this keyword here

let Student_Info1 = {
    Information: function (Name, reg_no, grade) {
        console.log(`The name of Student: ${Name} \nThe reg_no of person: ${reg_no} \nThe Grade of this person: ${grade}`);
    }
};
Student_Info1.Information('Lyba', 1222233, 89);


//JSON.stringify()

let Student_Info2 = {
    Name: "Lyba",
    reg_no: 184,
    grade: 11,
};

let Std_obj = JSON.stringify(Student_Info2);
console.log(Std_obj);

//Objects Simple Example

let book = {
    name: "Jannat K pattay",
    genre: "Fiction",
    Author: "Nemrah Ahmad",
    pages: 1470
};

console.log(`The name of book: ${book.name} \nThe genre of the book: ${book.genre} \nThe author: ${book.Author} \nThe total pages: ${book.pages}`);

//Objects With Functions

let recipe={
    name: "Chocolate Chip cookies",
    Servings: 35,
    ingredients: ["milk","egg","butter","chocolate Chips"],
    display_recipe: function(){
        console.log(`Name of recipe: ${this.name} \nServings: ${this.Servings}  \nIngredients: ${this.ingredients}`);
    }
};

recipe.display_recipe();

//function # 2
//without this keyword

let movie={
    movie_info: function(title,releasedate,director){
        console.log(`the title: ${title} \nRelease date: ${releasedate} \nDirector: ${director}`);
    }
};

movie.movie_info("ABCD","Jan1,1898","XYZ");