import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostComponent } from './post/post-component';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },

  { path: 'postlist', component: PostlistComponent },

  {
    path: 'post-edit',
    component: PostEditComponent,
    canActivate: [roleGuard],
    data: { role: 'Admin' },
  },

  {
    path: 'post',
    component: PostComponent,
    canActivate: [roleGuard],
    data: { role: 'Admin' },
  },
];
