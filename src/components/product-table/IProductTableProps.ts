import type Product from "../../models/Product";

export default interface IProductTableProps { 
  products: Product[]; 
  filterText: string;
  showInStockOnly: boolean;
}
