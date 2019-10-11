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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ReactiveFormsModule } from '@angular/forms';

import { StorageServiceModule } from 'ngx-webstorage-service';

import { BasicAuthInterceptorService } from './shared/services/http/basic-auth-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    LottieAnimationViewModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    LottieAnimationViewModule
  ],
  providers: [
    LoggedInService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
