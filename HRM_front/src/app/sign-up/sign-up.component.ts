
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SignupComponent {
 signupForm: FormGroup;

constructor(private fb: FormBuilder, private signupService: SignUpService) {
  this.signupForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

ngOnInit(): void {}

onSubmit() {
  if (this.signupForm.valid) {
    this.signupService.signup(this.signupForm.value).subscribe(
      response => {
        console.log('Signup successful', response);
        // Handle successful response
      },
      error => {
        console.error('Signup failed', error);
        // Handle error response
      }
    );
  }
}
}