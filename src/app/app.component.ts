import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Lista de Clientes',  link: '/'},
    { label: 'Inlcuir Cliente',  link: '/form'}
  ];

}
