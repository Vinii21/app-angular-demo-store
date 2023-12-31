import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input()
  public url!: string;
  @Input()
  public name!: string;
  @Input()
  public price!: number | undefined;
  @Input()
  public id!: number | undefined;
  @Input()
  public category!: string | undefined;

  constructor (private productsService: ProductsService) {}
}
