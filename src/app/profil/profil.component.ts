import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  patient = new Patient();
  name='';
  sessionValue : string ="";
  e : string ;
  constructor(private _service :RegistrationService, private _route : Router) { }

  ngOnInit(): void {
 /*  localStorage.setItem("FirstName","local -mimi");
   sessionStorage.setItem("Session ","Session- mimi");*/
    this.e=sessionStorage.getItem("email");
    this._service.getPatientByEmail(this.e).subscribe(
      data => {
        error => console.log("data recieved");
        this.patient=data;
      },
      error => {console.log("exception occured");}
    )
  }
/*affich(){
  this.pa = getPatient(this.patient.id).subscribe(
    data => {
      console.log("response recieved");
      this.name=;
  } ,

    error =>
     {
    console.log("exception occured");

}*/
show()
{
  this._route.navigateByUrl('/exercice');
}}
