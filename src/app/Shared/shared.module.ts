import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmailSignUpComponent } from './components/email-sign-up/email-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DescriptionComponent,
    EmailSignUpComponent,
    FooterComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    DescriptionComponent,
    EmailSignUpComponent,
    FooterComponent,
    CounterComponent
  ]
})
export class SharedModule { }
