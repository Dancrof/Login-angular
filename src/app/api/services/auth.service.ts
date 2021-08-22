import { Injectable } from '@angular/core';
import {first} from 'rxjs/operators'

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authFirebase: AngularFireAuth) { }

  async resetPass(email: string):Promise<void>{
    try{
      return await this.authFirebase.sendPasswordResetEmail(email);
    }
    catch(error){console.log(error);}
  }
  
  async sendVeridicationEmail(): Promise<void>{
    return (await this.authFirebase.currentUser).sendEmailVerification();
  }

  async login(email: string, pass: string){
    try{
      const res = await this.authFirebase.signInWithEmailAndPassword(email, pass);
      return res;
    }
    catch(error){
      console.log(error);
    }
  }

  async loginGoogle(){
    try{
      return await this.authFirebase.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    catch(error){console.log(error);}
  }

  loginFacebook(){
    
  }

  loginTwitter(){
    
  }

  async register(email: string, pass: string){
    try{
      const res = await this.authFirebase.createUserWithEmailAndPassword(email, pass);
      this.sendVeridicationEmail();
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


