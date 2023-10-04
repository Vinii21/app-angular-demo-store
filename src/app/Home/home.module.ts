import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomeModule { }
