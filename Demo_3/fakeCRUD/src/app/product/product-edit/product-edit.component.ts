import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { ModelState } from 'src/app/model/model-state.enum';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() productInput: IProduct;
  modelState = ModelState;

  constructor() { }

  ngOnInit() {
    console.log('ProductEditComponent.Init');

    if (this.productInput) {
      this.productInput.status = (this.productInput.productName && this.productInput.productName.length > 0) ? ModelState.Edit : ModelState.New;
    }
  }

}
