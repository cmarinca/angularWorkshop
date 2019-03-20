import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { IProduct } from "./model/iproduct";
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
  private apiUrl = `${environment.apiRootUrl}products`;
  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl).pipe(
      tap(data =>
        console.log(`GET : ${this.apiUrl} - ${JSON.stringify(data.length)}`)
      ),
      catchError(this.handleError)
    );
  }

  searchProducts(term: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this.apiUrl}/?productName_like=${term}`)
      .pipe(
        tap(data =>
          console.log(`GET : ${this.apiUrl} - ${JSON.stringify(data.length)}`)
        ),
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<IProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      tap(data => console.log(`getProduct: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    //console.error(err.message);
    //console.log(`STATUS: ${err.statusText}`);
    return throwError(err.message);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    console.log(product);
    const url = `${this.apiUrl}/${product.id}`;
    return this.http
      .put<IProduct>(url, JSON.stringify(product), { headers: this.headers })
      .pipe(
        tap(data => console.log(`updateProduct: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>(this.apiUrl, JSON.stringify(product), {
        headers: this.headers
      })
      .pipe(
        tap(data => console.log(`"createProduct: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<object> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
}
