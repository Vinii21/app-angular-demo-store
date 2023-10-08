import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { SharedModule } from '../Shared/shared.module';
import { ProductSiderbarComponent } from './components/product-siderbar/product-siderbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { OneProductPageComponent } from './page/one-product-page/one-product-page.component';
import { OneProductViewComponent } from './components/one-product-view/one-product-view.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductHeaderComponent,
    ProductSiderbarComponent,
    ProductListComponent,
    OneProductPageComponent,
    OneProductViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent,
    OneProductPageComponent
  ]
})
export class ProductsModule { }
