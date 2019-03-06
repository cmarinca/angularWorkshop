import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/tap';

import { IProduct } from './model/iproduct';

@Injectable()
export class ProductService {
  private apiUrl = 'localhost:3000/products';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  searchProducts(term: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this.apiUrl}/?productName_like=${term}`);
  }

  /*getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl)
      .do(data => console.log('getProducts: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post(this.apiUrl, JSON.stringify(product), { headers: this.headers })
      .do(data => console.log('createProduct: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IProduct>(url)
      .do(data => console.log('getProduct: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    console.log(product);
    const url = `${this.apiUrl}/${product.productId}`;
    return this.http
      .put(url, JSON.stringify(product), { headers: this.headers })
      .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .catch(this.handleError);
  }*/

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
