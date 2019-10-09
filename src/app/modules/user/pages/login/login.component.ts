import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpResponse } from '@angular/common/http';

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
    private authService: AuthService
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
      this.authService.byLogin(this.loginForm.controls.userName.value)
        .subscribe((httpResponse: HttpResponse<any>) => {

        });
    }
    this.loginForm.controls.userName.reset();
    this.loginForm.controls.secretKey.reset();
  }
}
