import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { FormArrayComponent } from './pages/form-array/form-array.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
];
