import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  alert("Invalid");
  return false;
};

// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(): boolean {
//     if (!this.authService.isAuthenticat()) {
//       alert("User is not Authenticated!!!");
//       this.router.navigate(['/login']);
//       return false;
//     } else {
//       return true;
//     }
//   }
// }