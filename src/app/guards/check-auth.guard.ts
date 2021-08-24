import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {take, map, tap} from 'rxjs/operators'

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../api/services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanActivateChild {
  
  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private authSvc: AuthService
  ){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSvc.authFirebase.authState
    .pipe(take(1))
    .pipe(map(authState => !! authState))
    .pipe(tap(authtenticated => {
      if(!authtenticated){
        this.router.navigate(['/auth']);
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Tu inicio de sesión expiró 😕',
          showConfirmButton: false,
          timer: 3000
        });
      } 
    })); 
  }
  
}
