import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private router: Router,
    //private PmtSrv: PaymentServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      userpassword: ['', Validators.required],
    });
  }

  initForm() {}

  login() {
    this.submitted = true;
    if (
      this.loginForm.controls['username'].invalid ||
      this.loginForm.controls['userpassword'].invalid
    ) {
      return;
    }
    //console.log(this.loginForm.get("useremail")?.value);
  this.authSrv.login(this.loginForm.get("username")?.value, this.loginForm.get("userpassword")?.value)
     
  /*  
  if () { 
      this.router.navigate(['/dashboard']);
    }
    else {
      this.toastr.warning("Invalid Username or Password");
    }  */

  }
  forgotpwd() {
    console.log('clicked');
  }
}
