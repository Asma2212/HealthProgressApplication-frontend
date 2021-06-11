import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }
  public loginPatientFromRemote(patient : Patient):Observable<any>{
return this._http.post<any>("http://localhost:8085/login",patient);
  }
  public registerPatientFromRemote(patient : Patient):Observable<any>{
    return this._http.post<any>("http://localhost:8085/register",patient);
      }
 /* public getPatient(patient : Patient):Observable<any>{
    return this._http.get<any>("http://localhost:8085/login",patient)
      }*/
      public getPatientByEmail(email : string):Observable<any>{
        return this._http.get<any>("http://localhost:8085/findE/"+email);
          }
          public updatePatient (patient:Patient): Observable <Patient>
          {
            return this._http.put<Patient>('http://localhost:8085/update',patient);
          }
}
