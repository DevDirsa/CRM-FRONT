import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbTreeGridModule } from "@nebular/theme";


import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";


import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { LoadsRoutingModule } from './loads-routing.module';
import { LoadsComponent } from './loads.component';
import { LoadListComponent } from './load-list/load-list.component';
import { LoadCreateComponent } from './load-create/load-create.component';
import { NgxLoadingModule } from "ngx-loading";


@NgModule({
  declarations: [LoadsComponent, LoadListComponent, LoadCreateComponent],
  imports: [
    LoadsRoutingModule,
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbMenuModule,
    NbTreeGridModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class LoadModule {}
