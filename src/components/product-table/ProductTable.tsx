import type IProductTableProps from "./IProductTableProps";
import ProductCategoryRow from "../product-category-row/ProductCategoryRow";
import ProductRow from "../product-row/ProductRow";

export default function ProductTable(props: IProductTableProps) {
  const { products, filterText, showInStockOnly } = props;
  const rows: React.ReactNode[] = [];

  let lastCategory: string = '';

  products.forEach((product) => {
    const { name, category, stocked } = product;
    const productFilter = new RegExp(filterText, 'i');

    if (!productFilter.test(name))
      return;

    if (showInStockOnly && !stocked)
      return;

    if (category !== lastCategory)
      rows.push(<ProductCategoryRow category={category} key={category} />);

    rows.push(<ProductRow product={product} key={name} />);

    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th className="ms-fontColor-themePrimary">Name</th>
          <th className="ms-fontColor-themePrimary">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
