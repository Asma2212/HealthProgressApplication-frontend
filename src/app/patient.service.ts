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
  
    return this.http.get<Patient[]>('http://localhost:8085/all');
  }

  public addPatient (patient: Patient): Observable <Patient>
  {
    return this.http.post<Patient>('http://localhost:8085/add',patient);
  }

  public updatePatient (patient:Patient): Observable <Patient>
  {
    return this.http.put<Patient>('http://localhost:8085/update',patient);
  }
 
  public deleltePatient (patientId:number): Observable <void>
  {
    return this.http.delete<void>('${this.apiServerURL}/delete/${patientId}');
  }

}
