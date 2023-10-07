import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'product-siderbar',
  templateUrl: './product-siderbar.component.html',
  styleUrls: ['./product-siderbar.component.css']
})
export class ProductSiderbarComponent {

  constructor (private productsService: ProductsService) {}

  public showFilter: boolean = false;


  public categories: Categories = {
    todo: true,
    sofa: false,
    silla: false,
    comedor: false
  }
  public selectedPriceValue: string = "30";

  handleShowFilter():void {
    this.showFilter = !this.showFilter;
  }

  changeMarketTodos():void {
    if (!this.categories.todo) {
      this.categories.comedor = false;
      this.categories.silla = false;
      this.categories.sofa = false;
    }
  }

  changMarket():void {
    if(!this.categories.comedor ||
      !this.categories.silla ||
      !this.categories.sofa ) {
        this.categories.todo = false
      }
  }

  filterProductsInList():void {
    const prices = this.selectedPriceValue.split(" ");
    this.productsService.filterProducts(this.categories, prices);
    this.handleShowFilter()
  }


}
