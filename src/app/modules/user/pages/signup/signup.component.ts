import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../../shared/services/auth/auth.service';
import { HttpResponse } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user: UserModel;
  public signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = new UserModel();

    this.user.getRequired();

    this._setForm();
  }

  public signup(): void {
    const user: UserModel = (new UserModel()).deserialize(this.signupForm.value);
    this.authService.add(user)
      .pipe(first())
      .subscribe((response: HttpResponse<any>) => {
        const properties: any = JSON.parse(response.body.properties);
        const greetings: string = properties.firstname + ' ' + properties.lastname;

        // Other http status
        this.snackBar.open(
          'Bonjour, ' + greetings + ' bienvenue...',
          '',
          {
            duration: 2000
          }
        );
        // Navigate to home after local storage

      }, (error) => {
        this.snackBar.open(
          error.error.message,
          '',
          {
            duration: 2000
          }
        );
        this.signupForm.reset();
      }
      );
  }

  private _setForm(): void {
    this.signupForm = this.formBuilder.group({
      nickName: [
        this.user._nickName,
        [
          Validators.required
        ]
      ],
      secretKey: [
        this.user._secretKey,
        [
          Validators.required
        ]
      ],
      email: [
        this.user._email,
        [
          Validators.required,
          Validators.email
        ]
      ],
      lastName: [
        this.user._lastName,
        [
          Validators.required
        ]
      ],
      firstName: [
        this.user._firstName,
        [
          Validators.required
        ]
      ]
    });
  }
}
