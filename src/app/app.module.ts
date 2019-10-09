import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { LoggedInService } from './shared/services/guards/logged-in.service';
import { MaterialModule } from './shared/modules/ui/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LottieAnimationViewModule.forRoot()
  ],
  exports: [
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    LottieAnimationViewModule
  ],
  providers: [
    LoggedInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
