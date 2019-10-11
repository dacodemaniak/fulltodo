import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { UserStateService } from './../../../../shared/services/auth/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  /**
   * Configuration des animations
   */
  public lottieConfig: any;

  /**
   * Instance du formulaire de connexion
   */
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private userState: UserStateService
  ) { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/animations/2585-imprint.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

    // Check for a user
    let userName: string;
    if (this.userState.hasUser()) {
      userName = this.userState.userName;
    }
    this.loginForm = this.formBuilder.group({
      userName: [
        userName,
        Validators.required
      ],
      secretKey: [
        '',
        Validators.required
      ]
    });
  }

  ngOnDestroy() {

  }

  public signin(): void {
    if (this.loginForm.valid) {
      this.authService.authenticate(this.loginForm.value)
      .pipe(first())
      .subscribe(
          (response: HttpResponse<any>) => {
            this.userState.update().then(() => {
              console.log('Then go home');
              this.router.navigate(['../', 'home']);
            });
          },
          (error: any) => {
            console.log('Error : ' + JSON.stringify(error));
            this.snackBar.open(
              error.error.message,
              '',
              {
                duration: 2000
              }
            );
            this.loginForm.controls.userName.reset();
            this.loginForm.controls.secretKey.reset();
          });
    }

  }
}
