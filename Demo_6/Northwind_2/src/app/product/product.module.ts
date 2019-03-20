import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProductIndexComponent } from "./product-index/product-index.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductCreatePlainComponent } from "./product-create-plain/product-create-plain.component";
import { ProductCreateTemplatedComponent } from "./product-create-templated/product-create-templated.component";
import { ProductCreateReactiveComponent } from "./product-create-reactive/product-create-reactive.component";

import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductIndexComponent,
    ProductEditComponent,
    ProductCreatePlainComponent,
    ProductCreateTemplatedComponent,
    ProductCreateReactiveComponent
  ]
})
export class ProductModule {}
