import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Configuration des animations
   */
  public lottieConfig: any;

  /**
   * Instance du formulaire de connexion
   */
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

}
