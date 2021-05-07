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
  constructor(private _service :RegistrationService, private _route : Router) { }

  ngOnInit(): void {
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
}
