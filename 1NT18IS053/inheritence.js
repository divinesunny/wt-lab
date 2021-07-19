class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;

    }
    About() {
        console.log("the car " + this.name + ' is' + this.type)
    }
    static Car() {
        console.log("static function");
    }
}


class vehicle extends Car {
    constructor(name, type, model) {
        super(name, type)
        this.model = model;
    }
    About() {
        super.About();
        console.log("The vehicle" + this.name + ' is' + this.model)
    }
}

const car1 = new Car("suzuki", "type1", "model1")
car1.About();
Car.Car();
const car2 = new vehicle("benz", "typ2", "model2")
car2.About()