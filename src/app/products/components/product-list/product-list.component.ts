import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'src/app/core/models/product-entity';
import { CommunicatorService } from 'src/app/core/services/communicator.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel> = new Array<ProductModel>();

  constructor(
    private productsService: ProductsService,
    private communicatorService: CommunicatorService,
    ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(productEntity: ProductEntity) {
    this.communicatorService.publish(productEntity);
  }
}
