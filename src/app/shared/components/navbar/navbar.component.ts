import { Component } from '@angular/core';
import { ICart } from '../../../core/models/common.model';
import { CartService } from '../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  cart: ICart;

  constructor(private cartService: CartService) {
    this.cart = cartService.cart();
  }
}
