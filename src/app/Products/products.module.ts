import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { SharedModule } from '../Shared/shared.module';
import { ProductSiderbarComponent } from './components/product-siderbar/product-siderbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { OneProductPageComponent } from './page/one-product-page/one-product-page.component';
import { OneProductViewComponent } from './components/one-product-view/one-product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { ProductCardComponent } from './components/product-card/product-card.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductHeaderComponent,
    ProductSiderbarComponent,
    ProductListComponent,
    OneProductPageComponent,
    OneProductViewComponent,
    SimilarProductComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
