import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/dtos/user/RegisterRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  siginSuccessful: boolean = true;
  constructor(private readonly form: FormBuilder,
              private readonly router: Router,
              private readonly authService: AuthenticationService) {

    this.registerForm = this.form.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  register(): void {
    let request = new RegisterRequest();
    request.email = this.registerForm.value.email;
    request.password = this.registerForm.value.password;
    request.confirmPassword = this.registerForm.value.confirmPassword;
    this.authService.register$(request).subscribe({
      next: () => {
        this.siginSuccessful = true;
        this.router.navigate(['/login']);
      },
      error: () => {
        this.siginSuccessful = false;
      },
    });
  }

  get email() {
    return this.registerForm.get('email');
  };

  get password() {
    return this.registerForm.get('password');
  };

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  };
}
