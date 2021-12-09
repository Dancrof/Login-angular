import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resert-password',
  templateUrl: './resert-password.component.html',
  styleUrls: ['./resert-password.component.css']
})
export class ResertPasswordComponent implements OnInit {

  ResetPass = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
  });
  
  constructor(
    private router: Router,
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
  }
  
  passReset(form?){
    const {email} = form;
    this.authSvc.resetPass(email);
    
    //alert
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Email enviado, checkea tu buzon 👀',
      showConfirmButton: false,
      timer: 3000
    });
    this.router.navigate(['/auth']);
  }
}
