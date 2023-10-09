import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Home/interfaces/products.interface';
import { Categories } from '../interfaces/categories.interface';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor() { }

   private cards: Product[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
      name: "silla plastica alta",
      category: "chair",
      price: 100
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "silla patas madera",
      category: "chair",
      price: 260
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "Banco blanco",
      category: "chair",
      price: 50
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80",
      name: "Banco mini par",
      category: "chair",
      price: 90
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "sofa tela verde",
      category: "sofa",
      price: 300
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "sofa tela opaca",
      category: "sofa",
      price: 370
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      name: "sofa delux",
      category: "sofa",
      price: 500
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1572025442348-511bdcae389b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "comedor 4 puestos",
      category: "comedor",
      price: 630
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1522683280249-025c6e03d311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "comedor 11 puestos",
      category: "comedor",
      price: 950
    },
    {
      id: 10,
      url: "https://plus.unsplash.com/premium_photo-1684505553482-9de8b2d437cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbWVkb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "comedor redondo 4 puestos",
      category: "comedor",
      price: 450
    },
  ]
  private cardsSubject = new BehaviorSubject<Product[]>(this.cards);
  cards$ = this.cardsSubject.asObservable();

  filterProducts(categories: Categories, prices: string[]): void {
    const {todo, comedor, silla, sofa} = categories;
    const numOne = Number(prices[0]);
    const numTwo = Number(prices[1] || "20000000000000");
    let filteredCards = this.cards;
    if(todo) {
      filteredCards = this.cards.filter(c => c.price! >= numOne && c.price! <= numTwo);
    } else {
      if (silla) filteredCards = this.cards.filter(c => (c.category === 'chair')&&(c.price! >= numOne && c.price! <= numTwo))
      if (sofa) filteredCards = this.cards.filter(c => (c.category === 'sofa')&&(c.price! >= numOne && c.price! <= numTwo))
      if (comedor) filteredCards = this.cards.filter(c => (c.category === 'comedor')&&(c.price! >= numOne && c.price! <= numTwo))
      if (comedor && silla) filteredCards = this.cards.filter(c => (c.category === 'comedor' || c.category === 'chair')&&(c.price! >= numOne && c.price! <= numTwo))
      if (silla && sofa) filteredCards = this.cards.filter(c => (c.category === 'chair' || c.category === 'sofa')&&(c.price! >= numOne && c.price! <= numTwo))
      if (sofa && comedor) filteredCards = this.cards.filter(c => (c.category === 'sofa' || c.category === 'comedor')&&(c.price! >= numOne && c.price! <= numTwo))
      if (silla && comedor && sofa) filteredCards = this.cards.filter(c => c.price! >= numOne && c.price! <= numTwo);
    }
    this.cardsSubject.next(filteredCards);
  }
}
