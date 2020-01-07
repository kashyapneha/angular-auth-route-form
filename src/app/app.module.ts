import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'auth', component: AuthComponent },
    { path:'form1', component: Form1Component },
    { path:'form2', component: Form2Component}
  ];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) ],
  declarations: [ 
    AppComponent, 
    AuthComponent,
    HeaderComponent,
    HomeComponent,
    Form1Component,
    Form2Component,
    LoadingSpinnerComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
