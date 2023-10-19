import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUserComponent } from './page-user/page-user.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    PageUserComponent,
    FormLoginComponent,
    BtnLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    PageUserComponent
  ]
})
export class UserModule { }
