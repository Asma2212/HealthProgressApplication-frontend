import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
quizzes: Quiz[] =[
 {
  
  question:'Le matin, combien de temps après vous être réveillé fumez-vous votre première cigarette ? ',
  answer:[
    { option:'Dans les 5 minutes',correct :3},
    { option:'6 à 30 minutes',correct :2},
    { option:'31 à 60 minutes',correct :1},
    { option:'Plus de 60 minutes',correct :0}
  ]
},
{
  
  question:'Trouvez-vous qu’il est difficile de vous abstenir de fumer dans les endroits où c’est interdit (par exemple cinémas, bibliothèques) ? ',
  answer:[
    { option:'Oui',correct :1},
    { option:'Non',correct :0},
  ]
},
{
  
  question:'Combien de cigarettes fumez-vous par jour, en moyenne ? ',
  answer:[
    { option:'10 ou moins',correct :0},
    { option:'11 à 20',correct :1},
    { option:'21 à 30',correct :2},
    { option:'31 ou plus ',correct :3}
  ]
},
{
  
  question:'A quelle cigarette renonceriez-vous le plus difficilement ? ',
  answer:[
    { option:'A la première de la journée ',correct :3},
    { option:'A une autre',correct :2}
  ]
},
{
  
  question:'Fumez-vous à intervalles plus rapprochés durant les premières heures de la matinée que durant le reste de la journée ?  ',
  answer:[
    { option:'Oui ',correct :1},
    { option:'Non ',correct :0}
  ]
},
{
  
  question:'Fumez-vous lorsque vous êtes malades au point de rester au lit presque toute la journée ? ',
  answer:[
    { option:'Oui ',correct :1},
    { option:'Non ',correct :0}
  ]
}
]

  constructor() { }
  getQuizzes()
  {
    return this.quizzes;
  }
}
