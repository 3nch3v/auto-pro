import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  loginForm: FormGroup;

  constructor(private form: FormBuilder, private router: Router) { 
    this.loginForm = this.form.group({
      email: new FormControl('', [Validators.required, Validators.minLength(3)]), //validate Email 
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
 }

  ngOnInit(): void {
  }

}
