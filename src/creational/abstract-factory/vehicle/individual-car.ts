import {VehicleModel} from "./vehicle.model";
import {CustomerModel} from "../customer/customer.model";

export class IndividualCar implements VehicleModel {
    constructor(public name: string, private readonly customer: CustomerModel) {
    }
    pickUp(): void {
        console.log(`${this.name} is looking for ${this.customer.name} (INDIVIDUAL)`)
    }
}
