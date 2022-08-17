import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api = 'https://guarded-bayou-10800.herokuapp.com';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postProduct(data: any) {
    return this.http.post<any>(`${api}/products/`, data);
  }
  getProduct() {
    return this.http.get<any>(`${api}/products/`);
  }
  updateProduct(data: any, id: number) {
    return this.http.put<any>(`${api}/products/${id}`, data);
  }
  deleteProduct(id: number) {
    return this.http.delete<any>(`${api}/products/${id}`);
  }
}
