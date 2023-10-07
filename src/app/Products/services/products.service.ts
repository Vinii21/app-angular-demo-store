import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Home/interfaces/products.interface';
import { Categories } from '../interfaces/categories.interface';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor() { }

   private cards: Product[] = [
    {
      url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
      name: "silla plastica alta",
      category: "chair",
      price: 100
    },
    {
      url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
      name: "silla plastica alta",
      category: "chair",
      price: 90
    },
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "sofa tela verde",
      category: "sofa",
      price: 300
    },
    {
      url: "https://images.unsplash.com/photo-1572025442348-511bdcae389b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "comedor 4 puestos",
      category: "comedor",
      price: 630
    },
  ]
  private cardsSubject = new BehaviorSubject<Product[]>(this.cards);
  cards$ = this.cardsSubject.asObservable();

  filterProducts(categories: Categories, prices: string[]): void {
    const {todo, comedor, silla, sofa} = categories;
    const numOne = Number(prices[0]);
    const numTwo = Number(prices[1] || "20000000000000");
    let filteredCards = this.cards;
    if(!todo) {
      if (silla) filteredCards = this.cards.filter(c => (c.category === 'chair')&&(c.price! >= numOne && c.price! <= numTwo))
      if (sofa) filteredCards = this.cards.filter(c => (c.category === 'sofa')&&(c.price! >= numOne && c.price! <= numTwo))
      if (comedor) filteredCards = this.cards.filter(c => (c.category === 'comedor')&&(c.price! >= numOne && c.price! <= numTwo))
      if (comedor && silla) filteredCards = this.cards.filter(c => (c.category === 'comedor' || c.category === 'chair')&&(c.price! >= numOne && c.price! <= numTwo))
      if (silla && sofa) filteredCards = this.cards.filter(c => (c.category === 'chair' || c.category === 'sofa')&&(c.price! >= numOne && c.price! <= numTwo))
      if (sofa && comedor) filteredCards = this.cards.filter(c => (c.category === 'sofa' || c.category === 'comedor')&&(c.price! >= numOne && c.price! <= numTwo))
      if (silla && comedor && sofa) filteredCards = this.cards
    }
    this.cardsSubject.next(filteredCards);
  }
}
