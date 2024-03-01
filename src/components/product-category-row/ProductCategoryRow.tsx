import type IProductCategoryProps from './IProductCategoryProps';

export default function ProductCategoryRow(props: IProductCategoryProps) {
  const { category } = props;

  return (
    <tr>
      <th colSpan="2">
        <span className='ms-fontSize-l ms-fontWeight-bold'>{category}</span>
      </th>
    </tr>
  );
}
