import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private isAuthenticated = false;

  constructor() { }

  login(username:string,password:string): boolean{
    if(username == "admin" && password == "admin"){
      localStorage.setItem("isLoggedIn","true");
      this.isAuthenticated = true;
      return true;
    }else{
      this.isAuthenticated = false;
      return false;
    }
  }
  
  logout(){
    localStorage.setItem("isLoggedIn","false");
    this.isAuthenticated = false;
  }

  isAuthenticat(): boolean {
    return this.isAuthenticated;
  }

}
