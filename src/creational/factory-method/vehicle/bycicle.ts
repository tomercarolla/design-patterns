import {Vehicle} from "./vehicle.model";

export class Bycicle implements Vehicle {
    constructor(private name: string) {
    }

    pickUp(customerName: string) {
        console.log(`${this.name} is looking for ${customerName}`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
}
