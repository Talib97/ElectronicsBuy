import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { CartServiceService } from '../shopping-cart/cart.service';
import { User } from '../userAuth.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  noOfItems:number=0;
  user$:Observable<User>;

  constructor(private authservice:AuthService,private cartservice:CartServiceService,private afAuth:AngularFireAuth) {
   this.user$ = this.afAuth.authState
   
   
   }

  ngOnInit(): void {

    this.cartservice.cartObservable.subscribe({
      next: (cart)=>{
        console.log(cart)
        this.noOfItems=Object.keys(cart).length;
      }
    })

  }
//  displayUserName(email,password){
//   this.userObj$=this.authservice.signIn(email,password).subscribe(user=>{
    
//   })

  logOut(){
    this.afAuth.signOut()
  }
 
   
 }
 
