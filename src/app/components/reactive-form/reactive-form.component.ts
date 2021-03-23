import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailMatch } from 'src/app/shared/email.match';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: any;
  submitted = false;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      confirmemail: ['', [Validators.required, Validators.email]],
      degree: ['', Validators.required],
      dob: ['', [Validators.required]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    }, {
      validator: EmailMatch('email', 'confirmemail')
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    this.submitted = true
    console.log("this.form:::", this.f)
    if (this.submitted == true) {
      console.log("value", this.reactiveForm.value);
      this.resetForm()
      this.submitted = false
    }
    if (this.reactiveForm.invalid) {
      return;
    }

  }

  resetForm() {
    this.reactiveForm.reset()
  }

}
