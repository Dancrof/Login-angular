import { Injectable } from '@angular/core';
import {first} from 'rxjs/operators'

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(public authFirebase: AngularFireAuth) { }

  async login(email: string, pass: string){
    try{
      const res = await this.authFirebase.signInWithEmailAndPassword(email, pass);
      return res;
    }
    catch(error){
      console.log(error);
    }
  }

  loginGoogle(){
    
  }

  loginFacebook(){
    
  }

  loginTwitter(){
    
  }

  async register(email: string, pass: string){
    try{
      const res = await this.authFirebase.createUserWithEmailAndPassword(email, pass);
      return res;
    }
    catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
      const res = await this.authFirebase.signOut()
      return res;
    }
    catch(error){
      console.log(error);
    }

  }

  refreshUser(){
    try{
      return this.authFirebase.authState.pipe(first()).toPromise()
    }
    catch(error){
      console.log(error);
    }
  }
}


