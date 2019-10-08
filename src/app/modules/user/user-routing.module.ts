import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
