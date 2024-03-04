/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';

import SearchBar from "../search-bar/SearchBar";
import ProductTable from "../product-table/ProductTable";
import type IFilterableProductTableProps from "./IFilterableProductTableProps";

export default function FilterableProductTable(props: IFilterableProductTableProps) {
  const { products } = props;
  const [filterText, setFilterText] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        showInStockOnly={showInStockOnly}
        onFilterTextChange={setFilterText}
        onShowInStockOnlyChange={setShowInStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        showInStockOnly={showInStockOnly} />
    </div>
  );
}
