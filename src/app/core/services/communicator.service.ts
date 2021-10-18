import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductEntity } from '../models/product-entity';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private productSource = new Subject<ProductEntity>();

  currentProduct = this.productSource.asObservable();

  publish(data: ProductEntity): void {
    this.productSource.next(data);
  }
}
