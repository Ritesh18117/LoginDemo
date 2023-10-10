import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _authService: AuthService,private router: Router){}

  login(username:string,password:string){
    const login = this._authService.login(username,password);
    console.log(login);
    if(login){
      this.router.navigate(['/home']);
    }
  }
}
