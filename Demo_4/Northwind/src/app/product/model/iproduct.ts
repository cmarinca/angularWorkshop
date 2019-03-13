export interface IProduct {
  productID: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  status: number; // 0 = New, 1 = Edit
}
