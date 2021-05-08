import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ProfilGuard implements CanActivate {
  constructor (private _loginService :LoginService, private _router:Router ){}
 canActivate () :boolean
 {
  if (this._loginService.loggedIn)
  { return true  }
  else 
  {
    this._router.navigate([''])
    return false
  }
 }
  
}
