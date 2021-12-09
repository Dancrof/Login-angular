import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueListComponent } from './pages/catalogue-list/catalogue-list.component';
import { CatalogueDetailsComponent } from './pages/catalogue-details/catalogue-details.component';
import { NavegationModule } from '../navegation/navegation.module';
import { SafePipe } from '../config/pipes/video-url.pipe';


import { DisqusModule } from 'ngx-disqus';


@NgModule({
  declarations: [
    CatalogueListComponent,
    CatalogueDetailsComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    NavegationModule,
    DisqusModule.forRoot('disqus_movienopolis')
  ]
})
export class CatalogueModule { }
