import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreatePlainComponent } from './product-create-plain/product-create-plain.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolver } from './product.resolver'

const routes: Routes = [
  {
    path: 'product',
    children: [
      { path: '', component: ProductIndexComponent },
      { path: 'create', component: ProductCreatePlainComponent },
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
  providers: [ProductResolver]
})
export class ProductRoutingModule { }
