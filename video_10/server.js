// let car = {
//     brand: "Tesla",
//     start: function() {
//         console.log("Car is starting...")
//     }
// }


// car.start();


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello my name is ${this.name}`)
// }


// let john = new Person("JOhn", 34);
// john.greet()


function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function() {
    console.log(`${this.type} makes a sound`)
}

let dog = new Animal("DOg");
dog.speak();


let personProtype = {
    greet: function() {
        console.log(`Hello my name is ${this.name}`)
    }
}

let alice = Object.create(personProtype);
alice.name = "Alice"
alice.greet();