import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patien';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public patients: Patient [];
  constructor(private patientService : PatientService ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  public getPatients (): void {
    this.patientService.getPatients().subscribe(
      (response :Patient []) => {
        this.patients=response;
      },
      (error: HttpErrorResponse ) =>{
        alert (error.message);
      }
    );  
  }

}
