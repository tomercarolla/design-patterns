
/*
The difference between abstract class and interface:
the interface is more light/slim - on TS the interface doesn't compile the code.
the abstract class is a class that you can implement thinks, but you can't instance this class.
*/

import {Vehicle} from "../vehicle/vehicle.model";

//Creator class
export abstract class VehicleFactory {
    //Factory Method
    abstract getVehicle(vehicleName: string): Vehicle;

    pickUp(customerName: string, vehicleName: string): Vehicle {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }
}
