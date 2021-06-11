import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { RegistrationService } from '../registration.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
patient = new Patient();
msg='';
sessionValue : string ="";
  localValue : string ="";
  constructor(private _service :RegistrationService, private _route : Router) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
    localStorage.setItem("FirstName","local -mimi");
    sessionStorage.setItem("Session ","Session- mimi");
  }

  loginPatient(email : string ){
    if (email === 'admin') {
      this._route.navigate(["/admin"])
    }
this._service.loginPatientFromRemote(this.patient).subscribe(
  data => {
    sessionStorage.setItem('email',email);
    console.log("response recieved");
    localStorage.setItem('isConnected', 'true');
    console.log(data);
  //  localStorage.setItem('token',data.token);
    this._route.navigate(["/profil"])
    this.sessionValue=sessionStorage.getItem("Second");
    this.localValue=localStorage.getItem("FirstName");
    console.log(this.sessionValue); 
    console.log(this.localValue);
    if(!this.sessionValue )
    {
      console.log("session null")
      return false
    }
    else 
    {
      return true
    }
} ,

  error =>
   {
  console.log("exception occured");
  this.msg="Bad credentials, please enter valid informations";
}
)
  }


    onSubmit() {
    console.log(this.form);
  }
}
