let p = document.querySelector('.person');


let person1 = new Object({
    name: 'Chris',
    age: 34,
    greeting: function () {
        return `Hi Im ${this.name} and I am ${this.age} years old`;
    }
});

p.textContent = person1.greeting();