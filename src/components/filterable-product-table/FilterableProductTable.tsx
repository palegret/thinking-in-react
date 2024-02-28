import SearchBar from "../search-bar/SearchBar";
import ProductTable from "../product-table/ProductTable";

export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
