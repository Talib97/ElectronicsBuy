import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authservice:AuthService,private router:Router) { }

  canActivate(route,state:RouterStateSnapshot){
    return this.authservice.user$.pipe(
      map(user=>{
        if(user){
          return true;
        }
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
        return false;
      })
    )

  }


}
