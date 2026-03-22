import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  username!: string;
  Admin: string = '';
  NormalUser: string = '';
  Post: string = '';
  PostEdit: string = '';
  PostEditandPost: string = '';
  firstName: string = '';
  lastName: string = '';
  dateogBirth: string = '';
  gender: string = '';
  email: string = '';
  password = '';
  showPassword = false;
  Confirmpassword: string = '';
  show = false;
  selectedForm = 'formGroupStepOne';
  selectedForm1 = 'formGroupStep1';
  formGroupStep: boolean = true;
  formGroupStepTwo: boolean = false;
  formGroupStepOne: boolean = false;
  formGroupStep1: boolean = false;
  Router: any;

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  preview() {
    this.show = !this.show;
    console.log('prev');
  }

  register() {
    this.snackBar.open('Registration Successful!', 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }
  login() {
    this.snackBar.open('Successfully Logged-In!', 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
    console.log('USERNAME:', this.username);

    let role;

    if (this.username?.toLowerCase() === 'admin') {
      role = 'ADMIN';
    } else {
      role = 'USER';
    }

    console.log('ROLE:', role);

    localStorage.setItem('role', role);

    this.router.navigate(['/postlist']);
  }

  next() {
    this.formGroupStep = false;
    this.formGroupStepTwo = true;
    this.formGroupStepOne = false;
  }

  previousForm1() {
    this.formGroupStepTwo = false;
    this.formGroupStep = true;
  }
}
