import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginrequest } from 'src/app/dtos/user/LoginRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BrowserStorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginForm: FormGroup;
  loginSuccessful: boolean = true;

  constructor(
    private readonly form: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthenticationService,
    private readonly storage: BrowserStorageService
  ) {
    this.loginForm = this.form.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  login(): void {
    let request = new Loginrequest();
    request.email = this.loginForm.value.email;
    request.password = this.loginForm.value.password;
    this.authService.login$(request).subscribe({
      next: (response) => {
        this.storage.setItem<string>('token', response.token as string);
        this.storage.setItem<string>('email', response.email as string);
        this.loginSuccessful = true;
        this.router.navigate(['/home']);
      },
      error: (e) => {
        this.loginSuccessful = false;
      },
    });
  };

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
