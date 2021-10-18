import { Component, DoCheck, IterableChangeRecord, IterableChanges, IterableDiffer, IterableDiffers, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  cartItems!: Array<CartItemModel>;

  get isEmpty(): boolean {
    return this.cartService.isEmptyCart;
  }

  get totalSum(): number {
    return this.cartService.totalSum;
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  constructor(
    private cartService: CartService,
    private communicatorService: CommunicatorService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.communicatorService.currentProduct.subscribe(
      data => this.cartService.addProduct(data)
    );

    this.cartItems = this.cartService.cartProducts;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRemove(cartItem: CartItemModel) {
    this.cartService.removeProduct(cartItem);
  }

  onIncreaseCount(cartItem: CartItemModel) {
    this.cartService.increaseQuantity(cartItem);
  }

  onDecreaseCount(cartItem: CartItemModel) {
    this.cartService.decreaseQuantity(cartItem);
  }

  trackById(index: number, item: CartItemModel): number {
    return item.product.id;
  }
}
