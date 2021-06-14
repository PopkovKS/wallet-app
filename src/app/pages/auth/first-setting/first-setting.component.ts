import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-first-setting',
  templateUrl: './first-setting.component.html',
  styleUrls: ['./first-setting.component.scss'],
})
export class FirstSettingComponent implements OnInit {

  public settingForm : FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.settingForm = this.formBuilder.group({
      currency : ['',[Validators.required]],
    });
  }

  setForm() {

    console.log(this.settingForm)



  }

}
