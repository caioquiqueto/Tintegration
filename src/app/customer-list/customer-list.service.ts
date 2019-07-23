import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoTableColumn } from '@portinari/portinari-ui';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  url = 'http://localhost:8041/api/crm/v1/customerVendor';
  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteCustomer(customerId: string, type: string = '1') {
    return this.http.delete(this.url + `/${type}/${customerId}`);
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', label: 'Código'},
      { property: 'storeId', label: 'Loja' },
      { property: 'name', label: 'Nome' },
      { property: 'type', label: 'Tipo' },
      { property: 'entityType', label: 'Fisica/Juridica' },
      { property: 'registerSituation', label: 'Situação' },
    ];
  }
}
