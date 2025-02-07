import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      this.authService.saveToken(response.access_token);
      this.router.navigate(['/dashboard']);
    }, error => {
      alert('Erro no login: ' + error.error.message);
    });
  }
}
