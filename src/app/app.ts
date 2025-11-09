import { Component, signal } from '@angular/core';
import { ExampleModalComponent } from './shared/components/example-modal/example-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private dialog: MatDialog) {}

  openModal(){
    this.dialog.open(ExampleModalComponent,{
      width: '400px',
      data: {
        title: 'Session Expired',
        message: 'Your session has expired.'
      }
    });
  }

}
