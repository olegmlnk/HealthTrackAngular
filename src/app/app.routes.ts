import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login' 
import { Register } from './pages/auth/register/register'
import { Dashboard } from './pages/dashboard/dashboard'

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
];
