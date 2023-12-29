import { Component } from "@angular/core";

import { MENU_ITEMS } from "../pages/pages-menu";

@Component({
  selector: "loads-pages",
  styleUrls: ["loads.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class LoadsComponent {
  menu = MENU_ITEMS;
}
