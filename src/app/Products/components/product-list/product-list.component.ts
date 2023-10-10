import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Home/interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public cards: Product[] = [];

  constructor (private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.cards$.subscribe(cards => {
      this.cards = cards;
    });
  }


}
