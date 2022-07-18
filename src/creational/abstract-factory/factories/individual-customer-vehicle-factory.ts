import {CustomerModel} from "../customer/customer.model";
import {IndividualCustomer} from "../customer/individual-customer";
import {VehicleModel} from "../vehicle/vehicle.model";
import {IndividualCar} from "../vehicle/individual-car";

export class CreateIndividualCustomerVehicleFactory {
    createCustomer(customerName: string): CustomerModel {
        return new IndividualCustomer(customerName);
    };

    createVehicle(vehicleName: string, customerName: string): VehicleModel {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    };
}
