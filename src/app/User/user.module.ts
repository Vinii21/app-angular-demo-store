import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { SharedModule } from '../Shared/shared.module';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';



@NgModule({
  declarations: [
    PageUserComponent,
    FormLoginComponent,
    BtnLoginComponent,
    PageProfileComponent
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
