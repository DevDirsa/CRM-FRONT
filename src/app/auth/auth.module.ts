import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NbAuthModule } from "@nebular/auth";
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from "@nebular/theme";

import { NgxLoginComponent } from "./login/login.component"; // <---
import { NgxAuthRoutingModule } from "./app-routing.component";
import { NgxRegisterComponent } from "./register/register.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent, // <---
    NgxRegisterComponent
  ],
})
export class NgxAuthModule {}
