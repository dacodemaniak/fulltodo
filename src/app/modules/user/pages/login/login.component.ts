import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/animations/2585-imprint.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

    this.loginForm = this.formBuilder.group({
      userName: [
        '',
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
              if (response.status === 200) {
                this.router.navigate(['home']);
              } else {
                // Other http status
                this.snackBar.open(
                response.body.message,
                '',
                {
                  duration: 2000
                }
              );
              this.loginForm.controls.userName.reset();
              this.loginForm.controls.secretKey.reset();
            }

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
