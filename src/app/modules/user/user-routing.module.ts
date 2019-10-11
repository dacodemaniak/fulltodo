import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MaterialModule } from './../../shared/modules/ui/material/material.module';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    LottieAnimationViewModule,
    ReactiveFormsModule
  ]
})
export class UserRoutingModule { }
