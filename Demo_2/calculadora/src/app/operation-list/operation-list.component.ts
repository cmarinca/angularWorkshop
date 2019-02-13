import { Component, OnInit, Input } from '@angular/core';
import { Operands } from '../model/operands';
import { Operation } from '../model/operation';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  @Input() ops: string;
  constructor() {}

  ngOnInit() {

  }

  getOperandLabel(op: Operands): string {
    return Operation.getOperandLabel(op);
  }
}
