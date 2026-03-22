import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-post-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
