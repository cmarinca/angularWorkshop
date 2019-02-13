import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductIndexComponent, ProductListComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductIndexComponent]
})
export class ProductModule { }
