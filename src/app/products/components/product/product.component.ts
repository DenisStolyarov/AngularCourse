import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductEntity } from 'src/app/core/models/product-entity';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product!: ProductModel;

  @Output()
  addToCart: EventEmitter<ProductEntity> = new EventEmitter<ProductEntity>();

  onAddToCart() {
    if (this.product.isAvailable) {
      this.addToCart.emit(this.product);
    }
  }
}
