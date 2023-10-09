import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneProductPageComponent } from './page/one-product-page/one-product-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';

const routes: Routes = [
  {
    path: "all-products",
    component: ProductPageComponent
  },
  {
    path: "all-products/:id",
    component: OneProductPageComponent
  },
  {
    path: "**",
    redirectTo: "all-products"
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
