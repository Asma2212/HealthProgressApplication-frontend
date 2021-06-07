import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './Patien';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiServerURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getPatients (): Observable <Patient[]>
  {
    return this.http.get<Patient[]>('${this.apiServerURL}/patient/all');
  }

  public addPatient (patient: Patient): Observable <Patient>
  {
    return this.http.post<Patient>('${this.apiServerURL}/patient/add',patient);
  }

  public updatePatient (patient:Patient): Observable <Patient>
  {
    return this.http.put<Patient>('${this.apiServerURL}/patient/update',patient);
  }
 
  public deleltePatient (patientId:number): Observable <void>
  {
    return this.http.delete<void>('${this.apiServerURL}/patient/delete/${patientId}');
  }

}
