import type IProductTableProps from "./IProductTableProps";
import ProductCategoryRow from "../product-category-row/ProductCategoryRow";
import ProductRow from "../product-row/ProductRow";

export default function ProductTable(props: IProductTableProps) {
  const { products } = props;  
  const rows: React.ReactNode[] = [];
  let lastCategory: string = '';

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );

    lastCategory = product.category;
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
