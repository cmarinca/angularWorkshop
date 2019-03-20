import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, Subject, of } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap, catchError, filter, mergeMap } from "rxjs/operators";

import { IProduct } from "../model/iproduct";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-index",
  templateUrl: "./product-index.component.html",
  styleUrls: ["./product-index.component.css"],
  providers: [ProductService]
})
export class ProductIndexComponent implements OnInit {
  products0: IProduct[] = [];
  products: Observable<IProduct[]>;

  searchTerms = new Subject<string>();

  term: string;

  constructor(private router: Router, private ps: ProductService) {}

  ngOnInit() {
    // this.ps.searchProducts('queso')
    // .subscribe((products) => {
    //   console.log(products);
    //   this.products0 = products;
    // },
    // e => console.error(e));

    //this.products = this.ps.searchProducts('queso');

    this.products = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        term ? this.ps.searchProducts(term) : of<IProduct[]>([])
      ),
      catchError(this.handleError)
    );
  }

  search(term: string): void {
    console.log(`Searching: ${term} ....`);
    this.searchTerms.next(term);
    this.term = term;
  }

  private handleError(err: string) {
    console.error(err);
    return of<IProduct[]>([]);
  }

  onCreate() {
    console.log('onCreate');
    // this.router.navigate(['/product/create']);
    //this.router.navigate(['/product/create/templated']);
    this.router.navigate(['/product/create/reactive']);
  }

  onDelete(id: number): void {
    console.log(`onDelete: ${id}`);

    this.ps.deleteProduct(id)
      .subscribe(() => {
        alert('Successfully deleted!');
      });
  }
}
