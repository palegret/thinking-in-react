import type IProductTableProps from "./IProductTableProps";
import ProductCategoryRow from "../product-category-row/ProductCategoryRow";
import ProductRow from "../product-row/ProductRow";

export default function ProductTable(props: IProductTableProps) {
  const { products } = props;  
  const rows: React.ReactNode[] = [];

  let lastCategory: string = '';

  products.forEach((product) => {
    const { name, category, filterText, stocked } = product;
    const productMatchesFilter = new RegExp(filterText, 'i').test(name);
    const shouldSkipProduct = showInStockOnly && !stocked;
     
    if (!productMatchesFilter || shouldSkipProduct)
      return;

    const element: React.ReactNode = (category !== lastCategory)
      ? <ProductCategoryRow category={category} key={category} />
      : <ProductRow product={product} key={name} />;

    rows.push(element);

    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
