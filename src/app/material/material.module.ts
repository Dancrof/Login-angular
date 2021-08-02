import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatBadgeModule
  ],
  exports:[
    MatInputModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
