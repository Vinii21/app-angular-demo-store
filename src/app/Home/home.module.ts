import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from '../Shared/shared.module';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { HomeDescriptionComponent } from './components/home-description/home-description.component';
import { HomePopularProductComponent } from './components/home-popular-product/home-popular-product.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HomeHeroComponent,
    HomeDescriptionComponent,
    HomePopularProductComponent
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
