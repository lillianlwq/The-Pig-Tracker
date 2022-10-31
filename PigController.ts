

interface PigControllerInterface {
    add(pig:Pig):void;
    getAll():Pig[];
    delete(id:number):void;
}

class PigController implements PigControllerInterface {
    allPigs: Pig[]; // keep track of all pigs in the farm

    constructor() {
        this.allPigs = [];
    }

    add(pig: Pig): void {
        this.allPigs.push(pig); // add new pigs into the list
        console.log(this.allPigs)
        localStorage.pigsArray = JSON.stringify(this.allPigs);
    }

    getAll(){
        return JSON.parse(localStorage.pigArray);
    }

    delete(id: number): void {
        this.allPigs.splice(id,1);
    }
}