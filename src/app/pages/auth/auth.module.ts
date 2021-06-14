import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegistrComponent } from "./registr/registr.component";
import { FirstSettingComponent } from "./first-setting/first-setting.component";
//import { MainPageComponent } from "./main-page/main-page.component";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations:
    [LoginComponent, RegistrComponent, FirstSettingComponent] //MainPageComponent],

})
export class AuthModule {}
