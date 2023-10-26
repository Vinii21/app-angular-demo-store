import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormConatctComponent } from './components/form-conatct/form-conatct.component';
import { SharedModule } from '../Shared/shared.module';
import { OthersContactsComponent } from './components/others-contacts/others-contacts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactPageComponent,
    FormConatctComponent,
    OthersContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactModule { }
