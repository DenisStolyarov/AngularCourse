import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {

  @Input()
  cartItem!: CartItemModel;

  @Output()
  remove: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  @Output()
  increaseQuantity: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  @Output()
  decreaseQuantity: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  onRemove() {
    this.remove.emit(this.cartItem);
  }

  onIncreaseCount() {
    this.increaseQuantity.emit(this.cartItem);
  }

  onDecreaseCount() {
    this.decreaseQuantity.emit(this.cartItem);
  }
}
