import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavegationModule } from '../navegation/navegation.module';
import { SliderComponent } from './pages/slider/slider.component';
import {SwiperModule} from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavegationModule,
    SwiperModule
  ]
})
export class HomeModule { }
