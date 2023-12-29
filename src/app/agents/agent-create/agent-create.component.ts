import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { AgentService } from '../../services/index-services';
import Swal from "sweetalert2";
@Component({
  selector: "ngx-agent-create",
  templateUrl: "./agent-create.component.html",
  styleUrls: ["./agent-create.component.scss"],
})
export class AgentCreateComponent {
  agentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _srvAgent: AgentService,
    private _location: Location
  ) {
    this.agentForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      second_surname: ["", Validators.required],
      user: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required],
      status: [1],
      id_type_user: [2],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {

    this._srvAgent.create(this.agentForm.value).subscribe((response) => {
      Swal.fire({
        title: "DO IT RIGHT!",
        text: "Registro creado correctamente",
        icon: "success",
        confirmButtonText: "ACEPTAR",
      });
      this.return();
    });
  }

  return(): void {
    this._location.back();
  }
}
