import { Component, OnInit } from '@angular/core';

import { CustomerListService } from './customer-list.service';
import { PoTableAction, PoNotificationService } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Array<any> = new Array();
  actions: Array<PoTableAction> = [
    { action: this.updateCustomer.bind(this), icon: 'po-icon-edit', label: 'Alterar Cliente'},
    { action: this.deleteCustomer.bind(this), icon: 'po-icon-delete', label: 'Excluir Cliente' }
  ];
  columns: Array<any>;

  constructor(private customerListService: CustomerListService,
              private router: Router,
              private poNotification: PoNotificationService) { }

  ngOnInit() {
    this.updateCustomerList();
    this.columns = this.customerListService.getColumns();
  }

  updateCustomer(row: any) {
    const customerId = row.code + row.storeId;
    this.router.navigate([`/form/${customerId}/${row.type}`]);
  }

  deleteCustomer(row: any) {
    const customerId = row.code + row.storeId;
    this.customerListService
    .deleteCustomer(customerId, row.type)
    .subscribe(() => {
      this.updateCustomerList();
      this.poNotification.success('Cliente Excluido com sucesso');
    }
    , err => this.poNotification.error(err));
  }

  updateCustomerList(): void {
    this.customerListService.getCustomerList().subscribe(response => {
      this.customerList = response.items;
    });
  }
}
