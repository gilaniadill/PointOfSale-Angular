import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  barcode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  constructor() {}

  // Add item to cart
  addToCart(product: any) {
    const item = this.cart.find(x => x.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        barcode: product.barcode
      });
    }
  }

  // Get all cart items
  getCartItems() {
    return this.cart;
  }

  // Increase or decrease qty
  updateQuantity(id: number, quantity: number) {
    const item = this.cart.find(x => x.id === id);
    if (!item) return;

    item.quantity = quantity;

    if (item.quantity <= 0) {
      this.removeItem(id);
    }
  }

  // Remove single item
  removeItem(id: number) {
    this.cart = this.cart.filter(x => x.id !== id);
  }

  // Empty cart
  clearCart() {
    this.cart = [];
  }

  // Total price
  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
