import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/pages/homepage/homepage.component';
import { ProductPageComponent } from './Products/page/product-page/product-page.component';
import { AboutPageComponent } from './About/pages/about-page.component';
import { ContactPageComponent } from './Contact/pages/contact-page/contact-page.component';
import { OneProductPageComponent } from './Products/page/one-product-page/one-product-page.component';

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
    path: "contact",
    component: ContactPageComponent
  },
  {
    path: "products/item",
    component: OneProductPageComponent
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
