import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { User } from './userAuth.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor(private authservice:AuthService,private router:Router,private db:AngularFireDatabase){
    authservice.user$.subscribe(
      (user)=>{
        this.user=user
        if(user){
          this.insertUserData(user)
          let returnUrl=localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl)
        }
      }
    )
  }

  insertUserData(user:User){
    return this.db.object("/users/" + user.uid).update({
      email:this.user.email,
      displayName:this.user.displayName,
    })
}
}
