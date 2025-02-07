import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // Cadastro de usuário
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  // Login e armazenamento do token JWT
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Salvar o token no localStorage
  saveToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  // Verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    const helper = new JwtHelperService();
    return token ? !helper.isTokenExpired(token) : false;
  }

  // Logout (remove o token)
  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
