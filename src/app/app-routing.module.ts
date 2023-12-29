import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "agents",
    loadChildren: () =>
      import("./agents/agents.module").then((m) => m.AgentsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "loads",
    loadChildren: () =>
      import("./load/load.module").then((m) => m.LoadModule),
    canActivate: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.NgxAuthModule),
  },

  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "pages/miscellaneous/404" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
