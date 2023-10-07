import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { SharedModule } from '../Shared/shared.module';
import { ProductSiderbarComponent } from './components/product-siderbar/product-siderbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductHeaderComponent,
    ProductSiderbarComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductsModule { }
