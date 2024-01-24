import { ProductModel } from "./product";

export class CategoryModel {
  games?: ProductModel[];
  drinks?: ProductModel[];
  cold_bars?: ProductModel[];
  warm_bars?: ProductModel[];
  snaks?: ProductModel[];
}