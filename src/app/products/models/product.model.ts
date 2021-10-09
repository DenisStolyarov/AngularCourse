import { ProductCategory } from "src/app/core/models/product-category";
import { ProductEntity } from "src/app/core/models/product-entity";

/**
 * Product Model
 */
export class ProductModel implements ProductEntity{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: ProductCategory,
        public isAvailable: boolean = true,
    ) { }
}