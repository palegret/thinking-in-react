import IProductCategoryProps from './IProductCategoryProps';

export default function ProductCategoryRow(props: IProductCategoryProps) {
  const { category } = props;

  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}
