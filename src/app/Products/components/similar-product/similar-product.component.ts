import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/Home/interfaces/products.interface';

@Component({
  selector: 'product-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.css']
})
export class SimilarProductComponent implements OnInit {

  constructor (private productsService: ProductsService) {}

  public similarProducts!: Product[];
  private anchoViewport = window.innerWidth || document.documentElement.clientWidth;
  public slidesPerView: number = 2;

  ngOnInit(): void {
    this.similarProducts = this.productsService.filterProductsByCategory;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(this.anchoViewport >= 1200) {
      this.slidesPerView = 4
    } else if(this.anchoViewport >= 800) {
      this.slidesPerView = 3
    } else {
      this.slidesPerView = 1
    }
  }

  onProductCardClick():void {
    location.reload();
  }
}
