import {Vehicle} from "./vehicle.model";

export class Car implements Vehicle {

    constructor(private name: string) {
    }

    pickUp(customerName: string): void {
        console.log(`${this.name} is is looking for ${customerName}`);
    }

    stop(): void {
        console.log(`${this.name} stopped`);
    }
}
