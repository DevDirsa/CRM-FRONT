import { Component } from "@angular/core";
import { NbLoginComponent } from "@nebular/auth";
import { AuthService } from '../../services/index-services';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
})
export class NgxLoginComponent {
  submitted: boolean = true;
  user;
  loginForm: FormGroup;

  constructor(
    private _srvAuth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  login(): void {
    this._srvAuth
      .login(
        this.loginForm.controls["email"].value,
        this.loginForm.controls["password"].value
      )
      .subscribe((response) => {
        if (response.status === 'success'){
          sessionStorage.setItem("token", response.access_token);
          this.router.navigate(["/pages/dashboard"]);
        }else{
          Swal.fire({
            title: "DO IT RIGHT!",
            text: response.message,
            icon: "warning",
            confirmButtonText: "ACEPTAR",
          });
        }
      });
  }
}



