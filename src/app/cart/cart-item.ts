import { Product } from "../product/product";

export interface CartItem{
    product:Product;
    quantity:number;
}