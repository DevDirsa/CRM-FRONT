import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test.component";
import { RegistroComponent } from "./registro/registro.component";

const routes: Routes = [
  {
    path: "",
    component: TestComponent,
    children: [
      {
        path: "registro",
        component: RegistroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}

export const routedComponents = [RegistroComponent, TestComponent];
