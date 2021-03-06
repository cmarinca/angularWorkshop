import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { HomeRoutingModule } from './home-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [HomeIndexComponent, HomeRootComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    ProductModule
  ],
  bootstrap: [HomeRootComponent]
})
export class HomeModule { }
