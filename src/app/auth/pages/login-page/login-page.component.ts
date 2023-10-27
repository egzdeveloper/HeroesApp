import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(private authSvc: AuthService, private router: Router) {}

  onLogin(): void {
    this.authSvc.login('edugz19@outlook.es', '123456')
      .subscribe( user => {
        this.router.navigateByUrl('/')
      })
  }

}
