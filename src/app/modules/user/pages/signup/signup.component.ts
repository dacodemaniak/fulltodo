import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../../shared/services/auth/auth.service';
import { HttpResponse } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';

import { first } from 'rxjs/operators';
import { UserStateService } from 'src/app/shared/services/auth/user-state.service';
import { UserState } from '../../model/user-state';
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar,
    private userState: UserStateService,
    private router: Router
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
        const userState: UserState = {
          lastname: properties.lastname,
          firstname: properties.firstname,
          nickName: response.body.nickName,
          isLoggedIn: false
        };
        this.userState.store(userState);
        this.router.navigate(['../', 'authentication']);

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
