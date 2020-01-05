import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';


const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'form1', component: Form1Component },
    { path:'form2', component: Form2Component}
  ];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes) ],
  declarations: [ 
    AppComponent, 
    HeaderComponent,
    HomeComponent,
    Form1Component,
    Form2Component
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
