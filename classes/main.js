function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}
Dog.prototype.bark = function () {
    console.log(`Bark bark! My name is ${this.name}`)
}

const snickers = new Dog('Snickers', 'King Charles');

console.log(snickers);

// When you put a method on the constructor, it will be inherited by the rest of them.

const names = ['wes', 'Luke'];

Dog.prototype.bark = function () {
    console.log(`Bark bark! I dont like you and my name is ${this.name}`)
}
