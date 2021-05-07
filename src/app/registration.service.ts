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
return this._http.post<any>("http://localhost:8085/login",patient)
  }
  public getPatient(patient : Patient):Observable<any>{
    return this._http.post<any>("http://localhost:8085/login",patient)
      }
}
