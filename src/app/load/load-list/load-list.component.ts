import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoadService } from '../../services/index-services';
import { Load } from '../../models/Load.model';

@Component({
  selector: "ngx-load-list",
  templateUrl: "./load-list.component.html",
  styleUrls: ["./load-list.component.scss"],
})
export class LoadListComponent {
  loads: Load[] = [];
  loading: boolean = false;
  loadingTemplate!: TemplateRef<any>;
  constructor(private router: Router, private _srvLoad: LoadService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getLoads();
  }

  getLoads(): void {
    this.loading = true;
    this.loads = [];
    this._srvLoad.get().subscribe((response) => {
      this.loads = response.data;
      this.loading = false;
    });
  }

  load(): void {
    this.router.navigate(["loads/create"]);
  }
}
