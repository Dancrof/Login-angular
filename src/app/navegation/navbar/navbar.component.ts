import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //[ngClass]="{'active_Menu': hideMenu == false}
  //(click)="hideMenu = !hideMenu"

  hideMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  /*deployCategory(){
    let arrow = document.querySelectorAll(".arrow");
    for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
      });
    }
  }*/
}
