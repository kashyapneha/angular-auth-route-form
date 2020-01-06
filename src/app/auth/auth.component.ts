import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent{
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) {}

    @ViewChild('f',{static:false}) signUpForm : NgForm;

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }
    
    onSubmit(){
        if(!this.signUpForm.valid){
            return;
        }
        const email = this.signUpForm.value.email;
        const password = this.signUpForm.value.password;

        let loginObs: Observable<LoginResponseData>;

        this.isLoading = true;
        if(this.isLoginMode) {
            loginObs = this.authService.login(email,password);
        } else {
            loginObs = this.authService.signup(email,password);
        }

        loginObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/app-form1']);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
        );
        this.signUpForm.reset();
    }
}