import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreatePlainComponent } from './product-create-plain/product-create-plain.component';
import { ProductCreateTemplatedComponent } from './product-create-templated/product-create-templated.component';
import { ProductCreateReactiveComponent } from './product-create-reactive/product-create-reactive.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductCreatePlainComponent,
    ProductCreateTemplatedComponent,
    ProductCreateReactiveComponent,
     ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
