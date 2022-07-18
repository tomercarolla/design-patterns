import {CustomerModel} from "../customer/customer.model";
import {VehicleModel} from "../vehicle/vehicle.model";
import {EnterpriseCustomer} from "../customer/enterprise-customer";
import {EnterpriseCar} from "../vehicle/enterprise-car";

export class CreateEnterpriseCustomerVehicleFactory {
    createCustomer(customerName: string): CustomerModel {
        return new EnterpriseCustomer(customerName);
    };

    createVehicle(vehicleName: string, customerName: string): VehicleModel {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    };
}
