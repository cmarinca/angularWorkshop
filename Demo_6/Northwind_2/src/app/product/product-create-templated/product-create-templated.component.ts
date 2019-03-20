import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IProduct } from '../model/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create-templated',
  templateUrl: './product-create-templated.component.html',
  styleUrls: ['./product-create-templated.component.css']
})
export class ProductCreateTemplatedComponent implements OnInit {

  item: IProduct;

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {
    console.log('ProductCreateTemplatedComponent.OnInit');

    this.item = {
      id: 0,
      productName: '',
      quantityPerUnit: '',
      unitPrice: 0,
      unitsInStock: 0
    };
  }

  onSave(productForm: NgForm) {
    console.log('ProductCreateTemplatedComponent.OnSave ...');
    console.log(productForm.form);

    this.ps.createProduct(this.item)
      .subscribe(product => {
        console.log(`Created: ${JSON.stringify(productForm.value)}`);
        alert('Successfully create!');

        this.router.navigate(['/product']);
      });
  }
}
