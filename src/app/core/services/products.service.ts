import { Injectable } from '@angular/core';
import { IProduct } from '../models/common.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`https://fakestoreapi.com/products`);
  }
}
