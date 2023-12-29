import { Component, TemplateRef } from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from "@nebular/theme";

import { AgentService } from '../../services/index-services';
import { Agent } from '../../models/agent.model';
import { Router } from '@angular/router';

@Component({
  selector: "ngx-agent-list",
  templateUrl: "./agent-list.component.html",
  styleUrls: ["./agent-list.component.scss"],
})
export class AgentListComponent {
  agents: Agent[] = [];
  loading: boolean = false;
  loadingTemplate!: TemplateRef<any>;

  constructor(private _srvAgent: AgentService, private router: Router) {}

  ngOnInit(): void {
    this.getAgentes();
  }

  getAgentes(): void {
    this.loading = true;
    this._srvAgent.get().subscribe((response) => {
      this.agents = response.data;
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["/agents/create"]);
  }

  delete(id: number): void {
    const body = {
      id,
    };
    this._srvAgent.delete(body).subscribe((response) => {
      if (response.status === "success") {
        // Swal.fire({
        //   title: "DO IT RIGHT!",
        //   text: response.msg,
        //   icon: "success",
        //   confirmButtonText: "ACEPTAR",
        // });
      }
      this.getAgentes();
    });
  }
}
