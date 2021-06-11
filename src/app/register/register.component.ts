import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _service :RegistrationService, private _route : Router) { }




  RegisterComponent:RegisterComponent;
  form: FormGroup;
  patient = new Patient();
  msg = '';
  ngOnInit() {
    this.form = new FormGroup({
      User: new FormControl('',
      [Validators.required]),

      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
      Confirm: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        RegisterComponent.validatorConfirmedPassword("Password"),
        Validators.maxLength(20) ])
    });
    localStorage.setItem("FirstName","local -mimi");
    sessionStorage.setItem("Session ","Session- mimi");
  }
  static validatorConfirmedPassword(fieldName: string):ValidatorFn
  {
    return (control:AbstractControl)=>{
      if(!control.value) return null;
      return control.value==control.root.get(fieldName).value ? null:{someError:true};
    }
  }
  onReset() {
    this.form.reset();
  }
  register(email : string){
    //this.patient.name=User;
    this.patient.email=this.form.get('Email').value;
    this.patient.password=this.form.get('Password').value;
    this.patient.name=this.form.get('User').value;
    this.patient.avatar="";
    this.patient.score=0;
    this._service.registerPatientFromRemote(this.patient).subscribe(
      data => {
        sessionStorage.setItem('email',email);
        localStorage.setItem('isConnected', 'true');
        this._route.navigate(["/quiz"]);
    } ,
    
      error =>
       {
      console.log("exception occured");
      console.log(this.patient.name);
      this.msg="Bad credentials, please enter valid informations";
    }
    )
  }


}
