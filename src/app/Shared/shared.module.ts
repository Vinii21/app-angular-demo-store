import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmailSignUpComponent } from './components/email-sign-up/email-sign-up.component';



@NgModule({
  declarations: [
    NavBarComponent,
    EmailSignUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    EmailSignUpComponent
  ]
})
export class SharedModule { }
