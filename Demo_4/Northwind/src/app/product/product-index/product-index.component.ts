import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../model/iproduct';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css'],
  providers: [ProductService]
})
export class ProductIndexComponent implements OnInit {

  public products0: IProduct[] = [];
  public products: Observable<IProduct[]> = new Observable<IProduct[]>();

  private searchTerms: Subject<string> = new Subject<string>();

  constructor(private ps: ProductService) { }

  ngOnInit() {
    /*this.ps.searchProducts('queso')
    .subscribe((products) =>{
      console.log(products);
      this.products0 = products;
    },
    e => console.error(e));

    this.products = this.ps.searchProducts('queso');*/

    /*this.searchTerms.subscribe((term) =>{
      console.log('Subject');
      this.products = this.ps.searchProducts(term);
    });

    this.search('queso');*/

    this.products = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => term ? this.ps.searchProducts(term) : of<IProduct[]>([]))
    );
  }

  search(term: string): void {
    console.log(`Searching: ${term} ....`),
    this.searchTerms.next(term);
  }

}
