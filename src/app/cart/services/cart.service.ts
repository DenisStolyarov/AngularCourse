import { Injectable } from '@angular/core';
import { ProductEntity } from 'src/app/core/models/product-entity';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<ProductEntity> = [];

  add(product: ProductEntity) {
    this.products.push(product);
  }

  remove() {
    this.products.pop();
  }
}
