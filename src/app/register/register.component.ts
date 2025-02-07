import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password).subscribe(() => {
      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);
    }, error => {
      alert('Erro no cadastro: ' + error.error.message);
    });
  }
}
