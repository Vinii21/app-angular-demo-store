import { Component } from '@angular/core';
import { Product } from 'src/app/Home/interfaces/products.interface';
import { ProductsService } from 'src/app/Products/services/products.service';

@Component({
  selector: 'shopping-car',
  templateUrl: 'shopping-car.component.html',
  styleUrls: ['shopping-car.component.css']
})

export class ShoppingCarPage {
  constructor (private productsService: ProductsService) {}

  public shoppingCar: Product[] = this.productsService.shoppingCar;
}
