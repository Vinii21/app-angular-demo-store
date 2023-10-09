import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.css']
})
export class SimilarProductComponent implements OnInit {
  private anchoViewport = window.innerWidth || document.documentElement.clientWidth;
  public slidesPerView: number = 2;

  ngOnInit(): void {
    if(this.anchoViewport >= 1200) {
      this.slidesPerView = 4
    } else if(this.anchoViewport >= 800) {
      this.slidesPerView = 3
    } else {
      this.slidesPerView = 1
    }
  }
}
