import { Component } from '@angular/core';
import { PostComponent } from '../post/post-component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/auth']);
  }
}
