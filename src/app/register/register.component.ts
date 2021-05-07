import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }


  register(f){
console.log(f.value)
  }

  RegisterComponent:RegisterComponent;
  form: FormGroup;

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



}
