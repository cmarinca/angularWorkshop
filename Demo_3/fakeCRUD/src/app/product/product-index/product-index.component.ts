import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../model/iproduct';
import { ModelState } from '../../model/model-state.enum';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  products: IProduct[] = [];
  current: IProduct;
  isCreating: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('assets/data.json').subscribe( products => {
      this.products = products as IProduct[];
      console.log(this.products.length);
    });
  }

  onSelected(item: IProduct): void{
    this.current = item;
    this.isCreating = false;
    //console.log(`onSelected: ${JSON.stringify(this.current)}`);
  }

  onCreate(): void {
    console.log('onCreate');
    this.isCreating = true;
    this.current = {
      productID: 0,
      productName: '',
      quantityPerUnit: '',
      unitPrice: 0,
      unitsInStock: 0,
      status: ModelState.New
    };
  }

}
