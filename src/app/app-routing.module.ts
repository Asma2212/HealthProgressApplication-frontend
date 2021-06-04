import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilGuard } from './profil.guard';
import { QuizComponent } from './quiz/quiz.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'quiz',component:QuizComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent },
  {path:'profil',component:ProfilComponent , canActivate:[ProfilGuard]},
  {path:'register',component:RegisterComponent},
  {path:'logout',component:LogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
