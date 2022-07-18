import {CustomerModel} from "../customer/customer.model";
import {VehicleModel} from "../vehicle/vehicle.model";

export interface CreateCustomerVehicleFactory {
    createCustomer(customerName: string): CustomerModel;
    createVehicle(vehicleName: string, customerName: string): VehicleModel;
}
