import { Category } from "./category.model";
import { Product } from "./product.model";

export interface AppState {
    categories: Category[];
    products: Product[];
    cart: Product[];
    wishlist: Product[];
  }