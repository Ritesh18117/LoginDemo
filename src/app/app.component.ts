import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginDemo';

  constructor(public _authService: AuthService){
    localStorage.setItem("isLoggedIn","false");
  }

  logout(){
    localStorage.setItem("isLoggedIn","false");
    this._authService.logout();
  }
}
