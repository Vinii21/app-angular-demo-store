import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCarPage } from './pages/shopping-car.component';
import { SharedModule } from '../Shared/shared.module';
import { SubTotalComponent } from './components/sub-total/sub-total.component';
import { HeaderShoppingCarComponent } from './components/header-shopping-car/header-shopping-car.component';



@NgModule({
  declarations: [
    ShoppingCarPage,
    ProductCardComponent,
    SubTotalComponent,
    HeaderShoppingCarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ShoppingCarPage
  ]
})
export class ShoppingCartModule { }
