import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exercices } from './exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  constructor(private http:HttpClient) {}
    public getAllExercices():Observable<exercices[]>{
      return this.http.get<exercices[]>("http://localhost:8085/exercice");
    }
  }

