import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  addUser() {
    console.log(this.userForm.value.email);
    console.log(this.userForm.value.password);
    this.authService.login({
      email: this.userForm.value.email!,
      password: this.userForm.value.password!,
    });
    this.userForm.reset();
  }
}
