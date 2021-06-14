import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss'],
})
export class RegistrComponent implements OnInit {

public registerForm : FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router : Router
  ) {

    this.registerForm = this.formBuilder.group({
      email: ['2', [Validators.required]], //Validators.email]],
      password: ['2', Validators.required],
      rePassword: ['2', Validators.required],
      name:['2', Validators.required],
      number: ['2', Validators.required]

    });
  }

  ngOnInit() {}

  logForm() {

    this.router.navigate(['auth/first-setting']);

    console.log(this.registerForm.value)
    console.log(this.registerForm)


  }

}
