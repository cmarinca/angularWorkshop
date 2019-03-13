import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../model/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [ProductService]
})
export class ProductEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log(`ProductEditComponent: id: ${id}`);

    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(`ProductEditComponent: id: ${id}`);
    })
  }

}
