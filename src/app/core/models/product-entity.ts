import { ProductCategory } from "./product-category";

export interface ProductEntity {
    id: number,
    name: string,
    description: string,
    price: number,
    category: ProductCategory,
    isAvailable: boolean,
}
