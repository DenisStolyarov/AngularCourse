import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Telephone', 'Useful gadget for communication', 100),
      new Product(2, 'Microwave', 'Useful gadget for food', 200),
      new Product(3, 'Laptop', 'Useful gadget for work', 700),
    ];
  }
}
