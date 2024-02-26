import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINT } from '../constants/constants';
import { Observable } from 'rxjs';
import { ApiResponse, IUser } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<ApiResponse<IUser[]>> {
    return this._http.get<ApiResponse<IUser[]>>(`${APIENDPOINT.UserEndpoint}`);
  }
}
