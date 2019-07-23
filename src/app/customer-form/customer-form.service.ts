import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormService {

  url = 'http://localhost:8041/api/crm/v1/customerVendor';

  constructor(private http: HttpClient) { }

  postNewCustomer(body: string) {
    return this.http.post(this.url, body);
  }

  getCustomer(customerId: string, type: string = '1') {
    return this.http.get(this.url + `/${type}/${customerId}`);
  }

  putCustomer(customerId: string, body: string, type: string = '1') {
    return this.http.put(this.url + `/${type}/${customerId}`, body);
  }
}
