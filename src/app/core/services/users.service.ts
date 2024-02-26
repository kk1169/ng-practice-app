import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IProduct, IUser } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(`https://api.escuelajs.co/api/v1/products`);
  }
}
