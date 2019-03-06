import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../model/iproduct';
import { ModelState } from '../../model/model-state.enum';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() productInput: IProduct;
  @Output() saved = new EventEmitter<IProduct>();
  modelState = ModelState;

  constructor() { }

  ngOnInit() {
    console.log('ProductEditComponent.Init');

    if (this.productInput) {
      this.productInput.status = (this.productInput.productName && this.productInput.productName.length > 0) ? ModelState.Edit : ModelState.New;
    }
  }

  onSave(item: IProduct) {
    console.log('Saving');
    this.saved.emit(item);
  }

}
