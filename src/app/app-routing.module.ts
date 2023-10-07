import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/pages/homepage/homepage.component';
import { ProductPageComponent } from './Products/page/product-page/product-page.component';
import { AboutPageComponent } from './About/pages/about-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "products",
    component: ProductPageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
