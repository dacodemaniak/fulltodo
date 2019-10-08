import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoggedInService } from './shared/services/guards/logged-in.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInService]
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
