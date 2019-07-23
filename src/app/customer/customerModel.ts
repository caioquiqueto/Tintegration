import { Address } from './addressModel';

export class Customer {
  companyInternalId: string;
  branchId: string;
  code: string;
  name: string;
  storeId: string;
  shortName: string;
  strategicCustomerType: string;
  entityType: string;
  registerSituation: string;
  type: number;
  address: Address = new Address();
}
