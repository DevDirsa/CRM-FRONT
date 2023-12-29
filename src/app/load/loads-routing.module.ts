import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "../pages/miscellaneous/not-found/not-found.component";
import { LoadsComponent } from "./loads.component";
import { LoadListComponent } from "./load-list/load-list.component";
import { LoadCreateComponent } from "./load-create/load-create.component";

const routes: Routes = [
  {
    path: "",
    component: LoadsComponent,
    children: [
      {
        path: "list",
        component: LoadListComponent,
      },
      {
        path: "create",
        component: LoadCreateComponent,
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
export class LoadsRoutingModule {}
