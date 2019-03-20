import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { ProductService } from './product.service';
import { IProduct } from './model/iproduct';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

  constructor(private productService: ProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    let id = +route.params['id'];

    console.log('ProductResolver.resolving ...');

    return this.productService.getProduct(id);
  }
}
