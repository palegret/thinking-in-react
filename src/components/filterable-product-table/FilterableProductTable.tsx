/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';

import SearchBar from "../search-bar/SearchBar";
import ProductTable from "../product-table/ProductTable";
import type IFilterableProductTableProps from "./IFilterableProductTableProps";

export default function FilterableProductTable(props: IFilterableProductTableProps) {
  const { products } = props;
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}
