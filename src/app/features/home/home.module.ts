import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
