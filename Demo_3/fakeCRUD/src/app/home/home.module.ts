import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    BrowserModule,
    ProductModule
  ],
  bootstrap: [IndexComponent]
})
export class HomeModule { }
