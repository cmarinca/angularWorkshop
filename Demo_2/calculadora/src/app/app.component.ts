import { Component } from '@angular/core';
import { Operation } from './model/operation';
import { Operands } from './model/operands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current: number = 0;
  accumulator: number = 0;

  operations: Operation[] = [];

  onSum(): void {
    this.accumulator += this.current;
    console.log(this.accumulator);
    this.operations.push(
      {
        operator: this.current,
        operand: Operands.Sum
      }
    );
  }

  onSub(): void {
    this.accumulator -= this.current;
    console.log(this.accumulator);
    this.operations.push(
      {
        operator: this.current,
        operand: Operands.Sub
      }
    );
  }

  onDiv(): void {
    this.accumulator /= this.current;
    console.log(this.accumulator);
    this.operations.push(
      {
        operator: this.current,
        operand: Operands.Div
      }
    );
  }

  onMul(): void {
    this.accumulator *= this.current;
    console.log(this.accumulator);
    this.operations.push(
      {
        operator: this.current,
        operand: Operands.Mul
      }
    );
  }

  getOperandLabel(op: Operands): string {
    return Operation.getOperandLabel(op);
  }
}
