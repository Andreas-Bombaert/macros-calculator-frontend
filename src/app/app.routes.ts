import { Routes } from '@angular/router';
import { LoginComponent } from '~/app/login/login.component';
import { HomeComponent } from '~/app/home/home.component';
import { NotFoundComponent } from '~/app/not-found/not-found.component';

export const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
    {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'login' ,
    component: LoginComponent
  },
  {
    path : "**",
    component: NotFoundComponent
  }
];
