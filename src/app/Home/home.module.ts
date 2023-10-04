import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from '../Shared/shared.module';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HomeHeroComponent
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
