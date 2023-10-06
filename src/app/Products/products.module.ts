import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductsModule { }
