import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginTemplateComponent } from './login-template/login-template.component';



@NgModule({
  declarations: [LoginTemplateComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
