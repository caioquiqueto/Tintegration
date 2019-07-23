import { CustomerFormService } from './customer-form.service';
import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@portinari/portinari-ui';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer/customerModel';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  fields: Array<PoDynamicFormField>;
  customerId: string;
  customerType: string;
  customer: Customer = new Customer();
  customerValues: any = {};
  title = 'Inclusão de Cliente';

  constructor(private customerFormService: CustomerFormService,
              private route: ActivatedRoute,
              private router: Router,
              private poNotification: PoNotificationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parameters => {
      this.customerId = parameters.get('id');
      this.customerType = parameters.get('type');
    });
    this.setFormFields();
    if (this.customerId) {
      this.title = 'Alteração de Cliente';
      this.setFormValue();
    }
  }

  insertCustomer(): void {
    this.getCustomerFromForm();
    this.customerFormService.postNewCustomer(JSON.stringify(this.customer))
    .subscribe(() => {
      this.poNotification.success('Cliente inserido com Sucesso');
      this.router.navigate(['/']);
    }, err => this.poNotification.error(err) );
  }

  updateCustomer(): void {
    this.getCustomerFromForm();
    this.customerFormService
    .putCustomer(this.customer.code + this.customer.storeId, JSON.stringify(this.customer), this.customerType)
    .subscribe(() => {
      this.poNotification.success('Cliente alterado com Sucesso');
      this.router.navigate(['/']);
    }, err => this.poNotification.error(err) );
  }

  private getCustomerFromForm(): void {
    // dados pessoais
    this.customer.code = this.customerValues.code;
    this.customer.storeId = this.customerValues.storeId;
    this.customer.name = this.customerValues.name;
    this.customer.shortName = this.customerValues.shortName;
    this.customer.strategicCustomerType = this.customerValues.strategicCustomerType;
    this.customer.entityType = this.customerValues.entityType;
    this.customer.registerSituation = this.customerValues.registerSituation;
    this.customer.type = this.customerValues.type;
    // sistemicos
    this.customer.branchId = this.customerValues.branchId;
    this.customer.companyInternalId = this.customerValues.companyInternalId;
    // Endereço
    this.customer.address.address = this.customerValues.address;
    this.customer.address.city.cityCode = this.customerValues.cityCode;
    this.customer.address.city.cityDescription = this.customerValues.cityCode;
    this.customer.address.city.cityInternalId = this.customerValues.cityCode;
    this.customer.address.state.stateId = this.customerValues.stateId;
    this.customer.address.state.stateInternalId = this.customerValues.stateId;
  }

  private setFormValue(): void {
    this.customerFormService
    .getCustomer(this.customerId, this.customerType)
    .subscribe((customer: Customer) => {
      this.customerValues.branchId = customer.branchId;
      this.customerValues.companyInternalId = customer.companyInternalId;
      this.customerValues.code = customer.code;
      this.customerValues.storeId = customer.storeId;
      this.customerValues.name = customer.name;
      this.customerValues.shortName = customer.shortName;
      this.customerValues.strategicCustomerType = customer.strategicCustomerType;
      this.customerValues.entityType = customer.entityType;
      this.customerValues.registerSituation = customer.registerSituation;
      this.customerValues.type = customer.type;
      this.customerValues.address = customer.address.address;
      this.customerValues.cityCode = customer.address.city.cityCode;
      this.customerValues.stateId = customer.address.state.stateId;
    });
  }

  private setFormFields(): void {
    this.fields = [
      {
        property: 'code',
        label: 'Código',
        divider: 'Dados Pessoais',
        maxLength: 6
      },
      {
        property: 'storeId',
        label: 'Loja',
        maxLength: 2
      },
      {
        property: 'name',
        label: 'Nome'
      },
      {
        property: 'shortName',
        label: 'Nome Reduzido'
      },
      {
        property: 'strategicCustomerType',
        label: 'Tipo do cliente',
        options: [
          { label: 'Cons. Final', value: 'F' },
          { label: 'Produtor Rural', value: 'L' },
          { label: 'Revendedor', value: 'R' },
          { label: 'Solidario', value: 'S' },
          { label: 'Exportação', value: 'X' }
        ]
      },
      {
        property: 'entityType',
        label: 'Tipo da entidade',
        options: [
          { label: 'Juridica', value: 'J' },
          { label: 'Fisica', value: 'F' }
        ]
      },
      {
        property: 'registerSituation',
        label: 'Situação',
        options: [
          { label: 'Inativo', value: '1' },
          { label: 'Ativo', value: '2' }
        ]
      },
      {
        property: 'type',
        label: 'Tipo',
        options: [
          { label: 'Cliente', value: 1 },
          { label: 'Fornecedor', value: 2 }
        ]
      },
      {
        property: 'address',
        label: 'Endereço',
        divider: 'Endereço'
      },
      {
        property: 'cityCode',
        label: 'Codigo da cidade'
      },
      {
        property: 'stateId',
        label: 'Estado',
        options: [
          { label: 'Santa Catarina', value: 'SC' },
          { label: 'São Paulo', value: 'SP' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Minas Gerais', value: 'MG' }
        ]
      },
      {
        property: 'branchId',
        label: 'Filial',
        divider: 'Sistemico'
      },
      {
        property: 'companyInternalId',
        label: 'Empresa'
      }
      ];
    }
  }
