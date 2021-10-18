import { Injectable } from '@angular/core';
import { ProductEntity } from 'src/app/core/models/product-entity';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly defaultCartQuantity: number = 1;

  totalSum: number = 0;
  totalQuantity: number = 0;
  cartProducts: Array<CartItemModel> = [];

  get isEmptyCart(): boolean {
    return this.cartProducts.length == 0;
  }

  getProduct(cartProductId: number): CartItemModel | undefined {
    return this.cartProducts.find(cartItem => cartItem.product.id == cartProductId);
  }

  getProductIndex(cartItem: CartItemModel): number {
    return this.cartProducts.indexOf(cartItem);
  }

  addProduct(product: ProductEntity) {
    const cartItem = this.getProduct(product.id);
    if (!cartItem) {
      this.cartProducts.push(new CartItemModel(product, this.defaultCartQuantity));
      this.updateCartData();
    }
  }

  removeProduct(cartItem: CartItemModel) {
    const position = this.getProductIndex(cartItem);
    if (position >= 0) {
      this.cartProducts.splice(position, 1);
      this.updateCartData();
    }
  }

  increaseQuantity(cartItem: CartItemModel) {
    const position = this.getProductIndex(cartItem);
    if (position >= 0) {
      this.cartProducts[position].count++;
      this.updateCartData();
    }
  }

  decreaseQuantity(cartItem: CartItemModel) {
    const position = this.getProductIndex(cartItem);
    if (position >= 0 && this.cartProducts[position].count > this.defaultCartQuantity) {
      this.cartProducts[position].count--;
      this.updateCartData();
    }
  }

  private updateCartData() {
    let sum: number = 0;
    let quantity: number = 0;

    this.cartProducts.forEach(cartItem => {
      quantity += cartItem.count;
      sum += cartItem.count * cartItem.product.price;
    });

    this.totalSum = sum;
    this.totalQuantity = quantity;
  }
}
