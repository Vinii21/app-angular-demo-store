import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page.component';
import { SharedModule } from '../Shared/shared.module';
import { HeroAboutComponent } from './components/hero-about/hero-about.component';
import { FeaturesAboutComponent } from './components/features-about/features-about.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HeroAboutComponent,
    FeaturesAboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutModule { }
