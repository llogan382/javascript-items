// creating objects


//1 object initializers
var car = {
    color: 'grey',
    SUV: false,
    Brand: 'Toyota',
    model: 'Camry',
    year: 2009,
    engine: {
        cylinders: 4,
        size: 2.2
    }
};

//2 using a constructor method
function Car(color, Brand, model, year) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.Brand = Brand;
}

var mycar = new Car('Grey', 'Toyota', 'Camry', 2009);

//3 using Object.create method

var Animal = {
    type: 'Mammals',
    displayType: function () {
        console.log(this.type);
    }
};

var Animal1 = Object.create(Animal);
console.log(Animal1.displayType()); //output mammals

var fish = Object.create(Animal);
fish.type = 'Fishes';
console.log(fish.displayType());