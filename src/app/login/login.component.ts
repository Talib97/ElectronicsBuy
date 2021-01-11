import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError:any;
  constructor(private afAuth:AngularFireAuth, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.eventAuthError$.subscribe(
      errordata=>{
        this.authError=errordata
      }
    )
  }
login(logform){
  this.authService.login(logform)
}


signInWithGoogle(){
  this.authService.signInWithGoogle()
}

}
