import {CustomerModel} from "./customer.model";

export class IndividualCustomer implements CustomerModel {
    constructor(public name: string) {
        this.name += ' (INDIVIDUAL)';
    }
}
