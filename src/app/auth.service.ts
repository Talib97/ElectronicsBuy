import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './userAuth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private eventAuthError=new BehaviorSubject<string>("")
eventAuthError$=this.eventAuthError.asObservable()
newUser:any;
user$: Observable<User>;
  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFireDatabase,
    private router:Router,
    private route:ActivatedRoute
    ) { this.user$= this.afAuth.authState}

 createUser(user){
   return this.afAuth.createUserWithEmailAndPassword(user.email,user.password)
   .then(userCredentials=>{
    this.newUser=user

    userCredentials.user.updateProfile({
      displayName:user.fullname
      
    })
    this.insertUserData(userCredentials).then(
      ()=>{
        this.router.navigate(["/home"]);
      }
    )
   })
   .catch(error=>{
    this.eventAuthError.next(error)
   })
   

 }

 insertUserData(userCredentials:firebase.default.auth.UserCredential){
     return this.db.object("/users/" + userCredentials.user.uid).set({
       email:this.newUser.email,
       displayName:this.newUser.fullname,
     })
}

login(user){
  return this.afAuth.signInWithEmailAndPassword(user.email,user.password)
  .catch(error=>{
    this.eventAuthError.next(error)
  })
  .then(userCredentials=>{
    if(userCredentials){
      this.router.navigate(["/home"])
    }
  })
}


signInWithGoogle(){
  let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || "/home";
  localStorage.setItem("returnUrl",returnUrl);
   return this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
       .then(()=> {
        
       }).catch(error => {
           console.log(error)
       });
}

get(uid: string) :Observable<any> {
  return this.db.object('/users/'+uid).valueChanges();
}

  
}
