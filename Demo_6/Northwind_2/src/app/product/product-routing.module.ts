import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreatePlainComponent } from './product-create-plain/product-create-plain.component';
import { ProductCreateTemplatedComponent } from './product-create-templated/product-create-templated.component';
import { ProductCreateReactiveComponent } from './product-create-reactive/product-create-reactive.component';

import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';

// path: 'product', // Sin Lazy Loading
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductIndexComponent },
      { path: 'create', children: [
        { path: '', redirectTo: 'plain', pathMatch: 'full' },
        { path: 'plain', component: ProductCreatePlainComponent },
        { path: 'templated', component: ProductCreateTemplatedComponent },
        { path: 'reactive', component: ProductCreateReactiveComponent },
      ] },
      {
        path: ':id/edit', resolve: { product: ProductResolver },
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductService, ProductResolver]
})
export class ProductRoutingModule { }
