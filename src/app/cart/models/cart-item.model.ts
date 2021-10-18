import { ProductEntity } from "src/app/core/models/product-entity";

export class CartItemModel {
    constructor(
        public product: ProductEntity,
        public count: number,
    ) { }
}
