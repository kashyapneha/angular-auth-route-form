import { Component } from '@angular/core';

import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isAuthenticated=true;

  constructor(private auth: AuthComponent){}

  onSubmit() {
    this.isAuthenticated = true;
  }
}