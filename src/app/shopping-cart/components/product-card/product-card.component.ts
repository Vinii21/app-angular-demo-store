import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Home/interfaces/products.interface';
import { ProductsService } from 'src/app/Products/services/products.service';

@Component({
  selector: 'shopping-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  public product: Product | undefined = undefined;

  constructor (private productsService: ProductsService) {}

  public shoppingCar: Product[] = this.productsService.shoppingCar;

  updatePrice(product: Product, newAmount: number) {
    product.amount = newAmount;
  }
}
