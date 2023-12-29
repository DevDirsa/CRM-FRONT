import { NgModule } from "@angular/core";
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

import { AgentCreateComponent } from "./agent-create/agent-create.component";
import { AgentsRoutingModule } from "./agents-routing.module";
import { AgentsComponent } from "./agents.component";
import { ThemeModule } from "../@theme/theme.module";
import { AgentListComponent } from "./agent-list/agent-list.component";


import { StatusPipe } from "../pipes/status.pipe";
import { ProfilePipe } from "../pipes/profile.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  imports: [
    AgentsRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbTreeGridModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
  ],
  declarations: [
    AgentsComponent,
    AgentCreateComponent,
    AgentListComponent,
    StatusPipe,
    ProfilePipe,
  ],
})
export class AgentsModule {}
