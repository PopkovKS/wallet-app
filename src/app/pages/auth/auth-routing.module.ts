import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {RegistrComponent} from "./registr/registr.component";
import { FirstSettingComponent } from "./first-setting/first-setting.component";
//import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registr',
    component: RegistrComponent,
  },
  {
    path : 'first-setting',
    component : FirstSettingComponent
  }
  // {
  //   path: 'main-page',
  //   component: MainPageComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
