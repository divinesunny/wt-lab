class vehicle{
    constructor(engines, color, type){
        this.engnies =  engines;
        this.color = color;
        this.type = type;
    }
    run(){
        console.log( this.type+"  running!!");
    }
    static vehicle(){
        console.log("static function called");
    }
}

class car extends vehicle{
    constructor(engines, color, company, type){
        super(engines, color, type);
        this.company = company;
    }
    run(){
        super.run();
        console.log("car belongs to  the company "+ this.company);
        
    }
}
class rover extends car{
    constructor(engines, color, company, type, model){
        super(engines, color, company, type);
        this.company = company;
        this.model = model;
    }
    run(){
        super.run();
        console.log("This is a rover");
    }
}

const car1 = new rover(4, "red", "suzuki", "car", "Dzire");
car1.run();
vehicle.vehicle();