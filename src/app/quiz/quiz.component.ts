import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes: Quiz[]=[];
currentQuiz =0;
answerSelected=false;
res=0;
Dependance :string ='';
result=false;
closeResult :string= '';
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes=this.quizService.getQuizzes();
  }
  onAnswer(option: number)
{
  this.answerSelected=true;
  setTimeout(()=>{
    this.currentQuiz++;
    this.answerSelected=false;
  },2000);
  this.res=this.res+option;
  if (this.res<=2) 
  {
    this.Dependance='Très faible ';
  }else if ((this.res>2) && (this.res<=4) )
  {
    this.Dependance='Faible';
  }
  else if (this.res==5)
  {
    this.Dependance='Moyenne';
  }
  else if ((this.res>5) && (this.res<=7 ))
  {
    this.Dependance='Forte ';
  }
  else 
  {
    this.Dependance='Trés Forte ';
  }
}
showResult()
{
  this.result=true;
}
}
