import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Products/services/products.service';

@Component({
  selector: 'shopping-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.css']
})
export class SubTotalComponent {
  constructor (private productsService: ProductsService) {}

  totalSum(): number {
    let sum = 0;
    for (const product of this.productsService.shoppingCar) {
      const operation = (product.amount || 1) * product.price;
      sum += operation
    }
    return sum;
  }
}
