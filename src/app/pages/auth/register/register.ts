import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
form!: FormGroup;

constructor(private fb: FormBuilder, private router: Router) {
  this.form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

submit()
{
  if(this.form.invalid)
  {
    this.form.markAllAsTouched();
    return;
  }
 
  const {email, password, username} = this.form.value;
  console.log('Registered user:', {username, email, password});
  this.router.navigate(['/login']);
}
}