import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/models/common.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.productsList = products;
      },
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
