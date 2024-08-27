import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cart;
  }

  addToCart(productId: number): void {
    const item = this.cart.find((i) => i.productId === productId);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ productId, quantity: 1 });
    }
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((i) => i.productId !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }
}
