import { ModelState } from './model-state.enum';

export interface IProduct {
  productID: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  status: ModelState;
}
