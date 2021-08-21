import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {


  // mostrar y ocultar sub_menu y navbar
  hideMenu = false;
  deploySubMenu = true;
  islogged = false;
 
  user: any;

  constructor(
    private router: Router,
    private authSvc: AuthService
  ) { }

  async ngOnInit(){
    this.user = await this.authSvc.refreshUser()
    if(this.user){
      console.log('User ->', this.user);
    }
  }

  onlogout(){
    this.authSvc.logout();
    this.router.navigate(['/auth']);
  }

}
