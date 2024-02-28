import products from '../../data/products.json';
import FilterableProductTable from '../filterable-product-table/FilterableProductTable';

export default function App() {
  return <FilterableProductTable products={products} />;
}
