import IProductRowProps from "./IProductRowProps";

export default function ProductRow(props: IProductRowProps) {
  const { product } = props;
  const {stocked, name, price} = product;

  const formattedName = stocked ? name : <span style={{ color: 'red' }}>{name}</span>;
  const formattedPrice = stocked ? price : <span style={{ color: 'red' }}>{price}</span>;

  return (
    <tr>
      <td>{formattedName}</td>
      <td>{formattedPrice}</td>
    </tr>
  );
}
