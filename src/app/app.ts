import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Login, Register, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'HealthTrack';


}
