import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public auth:AngularFireAuth,
    public rout:Router
  ) { }

  ngOnInit() {
  }
  Signin(email,password){
    return this.auth.signInWithEmailAndPassword(email.value,password.value)
    .then((res)=>{
      this.rout.navigate(['todo']);
    }).catch((error)=>{
      window.alert(error.message);
    })
  }


}
