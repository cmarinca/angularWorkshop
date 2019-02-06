import { Operands } from './operands';

export class Operation {
  constructor(public operator: number, public operand: Operands) {}

  static getOperandLabel(op: Operands): string {
    let result = '';
    switch (op) {
      case Operands.Sum:
        result = '+';
        break;
      case Operands.Sub:
        result = '-';
        break;
      case Operands.Div:
        result = '/';
        break;
      case Operands.Mul:
        result = '*';
        break;
      default:
        break;
    }

    return result;
  }
}
