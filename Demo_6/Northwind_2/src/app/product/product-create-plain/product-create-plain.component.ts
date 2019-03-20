import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IProduct } from '../model/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create-plain',
  templateUrl: './product-create-plain.component.html',
  styleUrls: ['./product-create-plain.component.css'],
  providers: [ProductService]
})
export class ProductCreatePlainComponent implements OnInit {

  item: IProduct;

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {
    console.log('ProductCreatePlainComponent.OnInit');

    this.item = {
      id: 0,
      productName: '',
      quantityPerUnit: '',
      unitPrice: 0,
      unitsInStock: 0
    };
  }

  onSave(productForm: NgForm) {
    console.log('ProductCreatePlainComponent.OnSave ...');
    this.ps.createProduct(this.item)
      .subscribe(product => {
        alert('Successfully create!');

        this.router.navigate(['/product']);
      });
  }
}
