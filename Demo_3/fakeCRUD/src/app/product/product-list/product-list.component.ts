import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../model/iproduct';
import { ModelState } from 'src/app/model/model-state.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: IProduct[] = [];
  @Output() selected = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
    console.log('ProductListComponent.Init');
  }

  onSelected(p: IProduct): void{
    p.status = ModelState.Edit;
    this.selected.emit(p);
  }

}
