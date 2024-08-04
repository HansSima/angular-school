import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}
  addUser() {
    console.log(this.userForm.value.email);
    console.log(this.userForm.value.password);
    this.authService.signUp({
      email: this.userForm.value.email!,
      password: this.userForm.value.password!,
    });
    this.userForm.reset();
  }
}
