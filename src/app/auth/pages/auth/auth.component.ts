import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
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
  
  // metodos de logearse y registrarse
  
  async loginGoogle(){
    const user = await this.authSvc.loginGoogle();
    if(user){
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'No terminaste de logearte 😕',
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  async loginFacebook(){
    const user = await this.authSvc.loginFacebook();
    if(user){
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'No terminaste de logearte 😕',
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  async loginTwitter(){
    const user = await this.authSvc.loginTwitter();
    if(user){
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'No terminaste de logearte 😕',
        showConfirmButton: false,
        timer: 3000
      });
    }
  }
  
  async SingIn(form?){
   
    const {email , password} = form; 
    
    const user = await this.authSvc.login(email, password);
    if(user && user.user.emailVerified){
     
      // si el correo esta registrado y verificado avanza a la ruta siguiente
      this.router.navigate(['/home']);
    
    } else if(user){
      
      // aletra de si el correo esta verificado
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Este email no esta verificado',
        showConfirmButton: true
      });
    
    } else {
      
      // alerta de si el email o pasword es incorrecto
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Credenciales invalidas',
        showConfirmButton: false,
        timer: 1500
      });
    }

    
  }

  async SingUp(form?){
    const {username , email , password} = form;
    
    const user = await this.authSvc.register(email, password)
    if(user){
      Swal.fire({
        title: '🎉 !Gracias por registrarte! 🎉',
        text: `Verifica tu email ${user.user.email} para poder logearte 👋`
      });
      this.Register.reset();
    } else{
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Email en uso',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
