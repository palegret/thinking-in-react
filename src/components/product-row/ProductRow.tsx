import type IProductRowProps from "./IProductRowProps";

export default function ProductRow(props: IProductRowProps) {
  const { product } = props;
  const { stocked, name, price } = product;

  const formattedName = stocked ? name : <span className="ms-fontColor-redDark">{name}</span>;
  const formattedPrice = stocked ? price : <span className="ms-fontColor-redDark">{price}</span>;

  return (
    <tr>
      <td>{formattedName}</td>
      <td>{formattedPrice}</td>
    </tr>
  );
}
