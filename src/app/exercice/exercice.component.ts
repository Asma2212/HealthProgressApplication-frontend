import { ExerciceService } from './../exercice.service';
import { exercices } from './../exercice';
import { Component, OnInit } from '@angular/core';
import {  NgbAccordion, NgbAccordionConfig, NgbPanel,NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
public exercice:exercices[];

constructor(private ExerciceService:ExerciceService) {}
public getExercice():void
{
  this.ExerciceService.getAllExercices().subscribe((
    response:exercices[])=>{
      this.exercice=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
    )
}
  ngOnInit(): void {
    this.getExercice();
  }

}
