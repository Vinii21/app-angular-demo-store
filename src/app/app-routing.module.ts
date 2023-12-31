import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/pages/homepage/homepage.component';
import { ProductPageComponent } from './Products/page/product-page/product-page.component';
import { AboutPageComponent } from './About/pages/about-page.component';
import { ContactPageComponent } from './Contact/pages/contact-page/contact-page.component';
import { OneProductPageComponent } from './Products/page/one-product-page/one-product-page.component';
import { ShoppingCarPage } from './shopping-cart/pages/shopping-car.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
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
    path: "products",
    loadChildren: () => import("./Products/products.module").then(m=>m.ProductsModule)
  },
  {
    path: "shopping/car",
    component: ShoppingCarPage
  },
  {
    path: "client",
    loadChildren: () => import("./User/user.module").then(m=>m.UserModule)
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
