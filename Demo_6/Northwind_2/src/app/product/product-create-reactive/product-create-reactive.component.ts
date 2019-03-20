import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create-reactive",
  templateUrl: "./product-create-reactive.component.html",
  styleUrls: ["./product-create-reactive.component.css"]
})
export class ProductCreateReactiveComponent implements OnInit {

  // Instancia de grupo de formulario
  mainForm: FormGroup = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
  });

  constructor(private ps: ProductService, private router: Router, private fb: FormBuilder) {}

  // Propiedades
  get productNameGet() { return this.mainForm.get('productName'); }

  ngOnInit(): void {
    console.log("ProductCreateReactiveComponent.Init");

    // // Para limpiar el formulario
    this.mainForm.reset();

    // Para asignar valores iniciales
    this.mainForm.patchValue({
      productName: 'Demostración'
    });

    // Suscribirse a cambios
    this.productNameGet.valueChanges
      .subscribe(value => console.log(`productName: ${value}`));

    // Actualizar/Evaluar validadores
    if (false) {
      this.productNameGet.setValidators(Validators.required);
      this.productNameGet.clearValidators();
      this.productNameGet.updateValueAndValidity();
    }
  }

  isValid(name: string): boolean {
    const fc: AbstractControl = this.mainForm.get(name);
    return fc ? (fc.touched || fc.dirty) && !fc.valid : false;
  }

  onSave() {
    console.log('ProductCreateReactiveComponent.OnSave ...');
    console.log(this.mainForm);
    this.ps.createProduct(this.mainForm.value)
      .subscribe(product => {
        console.log(`Created: ${JSON.stringify(this.mainForm.value)}`);
        alert('Successfully create!');

        this.router.navigate(['/product']);
      });
  }
}
