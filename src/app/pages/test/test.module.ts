import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { TestRoutingModule, routedComponents } from './test-routing.module';
import { ThemeModule } from "../../@theme/theme.module";

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from "@nebular/theme";


@NgModule({
  declarations: [...routedComponents, RegistroComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    ThemeModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class TestModule {}
