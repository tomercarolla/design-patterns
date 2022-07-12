import {VehicleFactory} from "./vehicle-factory";
import {Vehicle} from "../vehicle/vehicle.model";
import {Car} from "../vehicle/car";

export class CarFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName);
    }
}
