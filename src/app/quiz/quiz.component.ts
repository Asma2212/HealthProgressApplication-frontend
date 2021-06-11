import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';
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
  constructor(private quizService: QuizService,private router: Router) { }

  ngOnInit(): void {
    this.quizzes=this.quizService.getQuizzes();
    localStorage.setItem("FirstName","local -mimi");
    sessionStorage.setItem("Session ","Session- mimi")
  }
  onAnswer(option: number)
{
  this.answerSelected=true;
  
    //this.currentQuiz++;
   // this.answerSelected=false;
  
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
Suiv ()
  {
    if (this.currentQuiz<this.quizzes.length)
    {
      this.currentQuiz++;
      this.answerSelected=false;
    }
    else 
    {
      this.router.navigateByUrl('/profil');
    }
    
  }
  

}
