import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel(1, 'Telephone', 'Useful gadget for communication', 100),
      new ProductModel(2, 'Microwave', 'Useful gadget for food', 200),
      new ProductModel(3, 'Laptop', 'Useful gadget for work', 700),
    ];
  }
}
