import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<any> = [
    { "id": 1, "name": "bill" },
    { "id": 2, "name": "bob" },
    { "id": 3, "name": "billy" }
  ];

  remove() {
    this.products.pop();
  }
}
