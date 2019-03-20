import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from "../model/iproduct";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
  providers: [ProductService]
})
export class ProductEditComponent implements OnInit {
  item: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductService
  ) {}

  ngOnInit() {
    // Leer parámetro requerido. Opción #1
    let id = +this.route.snapshot.params['id'];
    console.log(`ProductEditComponent: id: ${id}`);

    // Leer parámetro requerido. Opción #2
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(`ProductEditComponent: id: ${id}`);
    });

    // Resolver
    this.item = this.route.snapshot.data['product'];
    console.log(this.item);

    // Resolver Observable (misma ruta)
    //this.route.data.subscribe(data => this.item = data['product']);
  }

  onSave() {
    console.log('onSave');

    this.ps.updateProduct(this.item).subscribe(() => {
      alert('Successfully update!');

      this.router.navigate(['/product']);
      //this.router.navigate(['/product'], { queryParamsHandling: 'preserve' });
    });
  }
}
