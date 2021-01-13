import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { GusuerService } from './guser.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private log:AuthService, private router:Router, private UserService:GusuerService){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<any> {
    return new Promise(
      (resolve,reject) => {
        this.UserService.getCurrentUser().then(user => {
          if(user){
            return resolve(true);
          }
          else{
            this.router.navigate(['/login']);
            return resolve(false);
          }
        })
      }
    )
  }
  
}
  

