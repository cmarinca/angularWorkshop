import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeIndexComponent } from './home-index/home-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductRoutingModule } from '../product/product-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeIndexComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
