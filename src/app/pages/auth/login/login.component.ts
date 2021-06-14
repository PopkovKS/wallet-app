import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  public user : FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private router : Router
  ) {
    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }



  ngOnInit() {}

  logForm() {

      this.router.navigate(['tabs']);


  console.log(this.user)
  console.log(this.user.valid)


  }

}

