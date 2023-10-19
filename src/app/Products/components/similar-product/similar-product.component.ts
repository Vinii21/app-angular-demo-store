import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/Home/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.css']
})
export class SimilarProductComponent implements OnInit {

  constructor (private productsService: ProductsService, private activatedRoute: ActivatedRoute) {}

  private anchoViewport = window.innerWidth || document.documentElement.clientWidth;
  public slidesPerView: number = 2;
  public saveProduct!: Product | undefined;
  private curentId!: number;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(this.anchoViewport >= 1200) {
      this.slidesPerView = 4
    } else if(this.anchoViewport >= 800) {
      this.slidesPerView = 3
    } else {
      this.slidesPerView = 1
    }
  }

  get filterProductsByCategory():Product[] {
    return this.productsService.similarProducts
  };

  startFilter(id: number) {
    this.productsService.findProductById(id)
  }

}
