import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { LoggedInService } from './shared/services/guards/logged-in.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoggedInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
