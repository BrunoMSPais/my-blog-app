import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.component').then((m) => m.PostsComponent),
  },
  {
    path: 'post/:id',
    loadChildren: () =>
      import('./components/post/post.component').then((m) => m.PostComponent),
  },
  {
    path: 'auth&mode=login',
    loadChildren: () =>
      import('./pages/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./pages/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/404/404.component').then((m) => m.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '/404',
  }
];
