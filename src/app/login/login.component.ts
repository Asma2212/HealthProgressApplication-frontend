import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
patient = new Patient();
msg='';
  constructor(private _service :RegistrationService, private _route : Router) { }

  ngOnInit(): void {
  }
  
  loginPatient(){
this._service.loginPatientFromRemote(this.patient).subscribe(
  data => {
    console.log("response recieved");
    this._route.navigate(["/profil"])

} ,
  
  error => 
   {
  console.log("exception occured");
  this.msg="Bad credentials, please enter valid informations";
}
)
  }
}
