import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps.searchProducts('queso')
    .subscribe((products) =>{
      console.log(products);
    });
  }

}
