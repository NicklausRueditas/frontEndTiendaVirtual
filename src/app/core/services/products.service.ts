import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '@core/interfaces/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl)
  }
}
