
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authservice:AuthService,private router:Router) { }
  authError:any;
  ngOnInit(): void {
    this.authservice.eventAuthError$.subscribe(
      errordata=>{
        this.authError=errordata
      }
    )
  }
  signUp(regForm){
    this.authservice.createUser(regForm);
    }

  }

