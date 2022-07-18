import {CustomerModel} from "./customer.model";

export class EnterpriseCustomer implements CustomerModel {
    constructor(public name: string) {
        this.name += ' (ENTERPRISE)';
    }
}
