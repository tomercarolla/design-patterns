import {CreateEnterpriseCustomerVehicleFactory} from "./factories/enterprise-customer-vehicle-factory";
import {CreateIndividualCustomerVehicleFactory} from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new CreateEnterpriseCustomerVehicleFactory();

const individualFactory = new CreateIndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('toyota', 'tomer');

const car2 = individualFactory.createVehicle('hiunday', 'amir');

car1.pickUp();
car2.pickUp();
