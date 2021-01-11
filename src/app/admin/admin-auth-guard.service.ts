import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private authservice:AuthService) { }

  canActivate(route,state:RouterStateSnapshot){
    return this.authservice.user$.pipe(switchMap(user=>
      
      this.authservice.get(user.uid)
      
     ) ).pipe(map(appuser=>appuser.isAdmin))

  }



}
