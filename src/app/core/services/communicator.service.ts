import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductEntity } from '../models/product-entity';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  channel = new Subject<ProductEntity>();

  publish(data: ProductEntity): void {
    this.channel.next(data);
  }
}
