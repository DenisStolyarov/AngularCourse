import { Injectable } from '@angular/core';
import { ProductCategory } from 'src/app/core/models/product-category';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel(1, 'IPhone', 'Useful gadget for communication', 1000, ProductCategory.Electronics),
      new ProductModel(2, 'Microwave', 'Useful gadget for food', 300, ProductCategory.Appliances),
      new ProductModel(3, 'Windows 10', 'Useful thing for work', 100, ProductCategory.Software),
    ];
  }
}
