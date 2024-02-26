import { Injectable, computed, effect, signal } from '@angular/core';
import { ICart, IProduct } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<ICart>({
    product: [],
    totalAmount: 0,
  });

  constructor() {}

  addToCart(product: IProduct) {
    this.cart.update((cart) => {
      cart.product.push(product);
      cart.totalAmount = this.calculateTotalPrice(cart.product);
      return cart;
    });
  }

  removeFromCart(product: IProduct) {
    this.cart.update((cart) => {
      cart.product = cart.product.filter((p) => p.id !== product.id);
      cart.totalAmount -= product.price;
      return cart;
    });
  }

  calculateTotalPrice(product: IProduct[]): number {
    return product.reduce((total, product) => total + product.price, 0);
  }
}
