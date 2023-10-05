import { Component } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'home-popular-product',
  templateUrl: 'home-popular-product.component.html',
  styleUrls: ['home-popular-product.component.css']
})

export class HomePopularProductComponent {
  constructor() { }
  public products: Product[] = [
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "sofá de tela verde"
    },
    {
      url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG11ZWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "sofá de tela naranja"
    },
    {
      url: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
      name: "butaca de tela azul"
    }
  ]
}
