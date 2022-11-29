import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
      public auth:AngularFireAuth,
      public rout:Router
  ) { }

  ngOnInit() {
  }
  
   RegisterUser(email,password){
    return this.auth.createUserWithEmailAndPassword(email.value,password.value)
    .then((res)=>{
     this.rout.navigate(['home']);
     }).catch((error)=>{
       window.alert(error.message)
      })
   }



  
}

