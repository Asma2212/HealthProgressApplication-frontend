import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ProfilGuard implements CanActivate {
  constructor(private router: Router) { }
canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
if (Boolean(localStorage.getItem('isConnected'))) {
return true;
} else {
  this.router.navigateByUrl('/login');
return false;
}
}
 }
  

