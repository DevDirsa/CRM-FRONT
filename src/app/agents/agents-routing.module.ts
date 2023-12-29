import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgentsComponent } from './agents.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { AgentCreateComponent } from './agent-create/agent-create.component';
import { AgentListComponent } from './agent-list/agent-list.component';


const routes: Routes = [
  {
    path: "",
    component: AgentsComponent,
    children: [
      {
        path: "create",
        component: AgentCreateComponent,
      },
      {
        path: "list",
        component: AgentListComponent,
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsRoutingModule {}
