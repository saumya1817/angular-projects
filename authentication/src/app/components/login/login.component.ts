import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError:string = '';
  isLoginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void{
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(){
    const { username, password } = this.loginForm.value;
    if(this.authService.login(username, password)){
      this.router.navigate(['/dashboard']);
    }else{
      this.isLoginError = true;
      this.loginError = "Invalid Username or Password";
    }
    this.loginForm.reset();
  }

}
