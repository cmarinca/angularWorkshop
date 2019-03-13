import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IProduct } from './model/iproduct';


@Injectable()
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  searchProducts(term: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this.apiUrl}/?productName_like=${term}`)
      .pipe(
        tap(data => console.log(`GET: ${this.apiUrl} - ${JSON.stringify(data.length)}`)),
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<IProduct> {
    const url = `${this.apiUrl}/?productID=${id}`;
    return this.http.get<IProduct>(url)
      .pipe(
        tap(data => console.log(`getProduct:  ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }
 /*
  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post(this.apiUrl, JSON.stringify(product), { headers: this.headers })
      .do(data => console.log('createProduct: ' + JSON.stringify(data)))
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
    return throwError(err.message);
  }
}
