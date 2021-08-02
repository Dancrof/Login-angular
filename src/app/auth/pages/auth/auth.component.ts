import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  //==== Inpust Auth ===========================
  Login = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  Register = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  
  //==== test user ===========================

  user = {
    username: 'admin',
    password: '1234'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modeSingUp(){
    const sing_up_btn = document.querySelector("#sing-up-btn");
    const container = document.querySelector(".container");

    sing_up_btn.addEventListener('click', () => {
      container.classList.add("sing-up-mode");
    });
  }

  modeSingIn(){
    const sing_in_btn = document.querySelector("#sing-in-btn");
    const container = document.querySelector(".container");

    sing_in_btn.addEventListener('click', () => {
      container.classList.remove("sing-up-mode");
    });
  }

  SingIn(form?){
   
    const valueUsername = this.Login.get('username').value;
    const valuePass =  this.Login.get('password').value;
    
    //const loginValue = form;
    
    if(valueUsername == this.user.username && valuePass == this.user.password){
      this.router.navigate(['/home'])
    }else{
      alert('credential incorrect');
    }
  }

  SingUp(form){
    console.log(form);
  }

}
