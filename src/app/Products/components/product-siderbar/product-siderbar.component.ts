import { Component } from '@angular/core';

@Component({
  selector: 'product-siderbar',
  templateUrl: './product-siderbar.component.html',
  styleUrls: ['./product-siderbar.component.css']
})
export class ProductSiderbarComponent {
  public showFilter: boolean = false;

  handleShowFilter():void {
    this.showFilter = !this.showFilter;
  }
}
