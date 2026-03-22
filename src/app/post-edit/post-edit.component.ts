import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-post-edit.component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
