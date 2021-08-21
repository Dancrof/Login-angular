import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[AuthService]
})
export class AuthComponent implements OnInit {

  //==== Inpust Auth ===========================
  Login = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });

  Register = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  
  //==== test user ===========================

  user = {
    username: 'admin',
    password: '1234'
  };

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

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

  async SingIn(form?){
   
    const {email , password} = form; 
    //const valueEmail = this.Login.get('email').value;
    //const valuePass =  this.Login.get('password').value;
    const user = await this.authSvc.login(email, password);
    if(user){
      this.router.navigate(['/home']);
    } else{
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Email or password incorret',
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  }

  async SingUp(form?){
    const {username , email , password} = form;
    //const valueEmail = this.Register.get('email').value;
    //const valuePass =  this.Register.get('password').value;
    const user = await this.authSvc.register(email, password)
    if(user){
      this.router.navigate(['/home']);
    } else{
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Email in use',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
