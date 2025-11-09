import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient){}

  register(userData: {userData: any}): Observable<any>{
    console.log('Register called with', userData);
    // return this.http.post('/api/register', userData);
    return of({success: true});
  }

  login(credentials: any): Observable<boolean>{
    if(credentials.email === 'name.surname@gmail.com' && credentials.password === 'Password123'){
    console.log('Login called with', credentials);
    // return this.http.post('/api/login', credentials);
  // localStorage is not available during server-side rendering. Guard access.
  if (typeof localStorage !== 'undefined' && localStorage) {
    localStorage.setItem('token', 'fake-jwt-token');
  }
  return of(true);
}
    return of(false);
  }

  getCurrentUser():Observable<any>{
    return of({id: 1, name: 'Name Surname', email: 'name.surname@gmail.com'});
  }

  isLoggedIn(): boolean {
    // Guard localStorage access for SSR environment
    if (typeof localStorage === 'undefined' || !localStorage) return false;
    return !!localStorage.getItem('token');
  }

  logout(): void{
    if (typeof localStorage !== 'undefined' && localStorage) {
      localStorage.removeItem('token');
    }
  }

}
