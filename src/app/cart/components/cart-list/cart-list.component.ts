import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  public get isEmpty(): boolean {
    return this.cartService.products.length == 0;
  }

  public get products(): Array<any> {
    return this.cartService.products;
  }

  constructor(
    private cartService: CartService,
    private communicatorService: CommunicatorService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.communicatorService.channel.subscribe(
      data => this.cartService.add(data)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRemove() {
    this.cartService.remove();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
