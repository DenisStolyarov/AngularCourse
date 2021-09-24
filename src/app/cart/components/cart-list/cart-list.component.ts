import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  public get isEmpty(): boolean {
    return this.cartService.products.length == 0;
  }

  public get products(): Array<any> {
    return this.cartService.products;
  }

  constructor(private cartService: CartService) { }

  onRemove() {
    this.cartService.remove();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
