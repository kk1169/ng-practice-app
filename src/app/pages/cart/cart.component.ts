import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CartService } from '../../core/services/cart.service';
import { IProduct } from '../../core/models/common.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartProducts = this.cartService.cart().product;
  totalPrice = this.cartService.cart().totalAmount;

  constructor(private cartService: CartService) {}

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
    this.udpateCart();
  }

  udpateCart() {
    this.cartProducts = this.cartService.cart().product;
    this.totalPrice = this.cartService.cart().totalAmount;
  }
}
