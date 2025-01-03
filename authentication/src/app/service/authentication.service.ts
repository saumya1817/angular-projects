import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated = false;

  constructor(
    private router: Router
  ) { }

  login(username: string, password: any): boolean{
    if(username === 'user' && password === 'password'){
      this.isAuthenticated = true;
      localStorage.setItem('auth-token', 'DummyTokenValue');
      return true;
    }else{
      return false;
    }
  }

  logout(): void{
    localStorage.removeItem('auth-token');
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('auth-token');
  }
}
