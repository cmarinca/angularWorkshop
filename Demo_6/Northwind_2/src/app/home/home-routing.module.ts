import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeIndexComponent } from "./home-index/home-index.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// import { ProductRoutingModule } from '../product/product-routing.module'; // Sin Lazy Loading

import { UserModule } from "../user/user.module";
import { AuthGuardService } from "../user/auth-guard.service";

const routes: Routes = [
  { path: "home", component: HomeIndexComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "product",
    loadChildren: "../product/product.module#ProductModule",
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  { path: "**", component: PageNotFoundComponent }
];

// imports: [RouterModule.forRoot(routes), ProductRoutingModule], // Sin Lazy Loading
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }),
    UserModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
