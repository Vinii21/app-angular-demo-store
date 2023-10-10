import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/Home/interfaces/products.interface';

@Component({
  selector: 'oneProduct-view',
  templateUrl: './one-product-view.component.html',
  styleUrls: ['./one-product-view.component.css']
})
export class OneProductViewComponent implements OnInit {

  public saveProduct!: Product | undefined;
  public counter: number = 1;

  constructor (private activatedRoute: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        this.saveProduct = this.productsService.findProductById(Number(params["id"]))
      });
  }

  increaseBy(value: number):void {
    if(value === -1 && this.counter === 1){
      this.counter = 1
    }else {
      this.counter += value
    };
  }
}
