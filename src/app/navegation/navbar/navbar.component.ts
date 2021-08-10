import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  // mostrar y ocultar sub_menu y navbar
  hideMenu = false;
  deploySubMenu = true;
 
  constructor() { }

  ngOnInit(): void {
  }

}
