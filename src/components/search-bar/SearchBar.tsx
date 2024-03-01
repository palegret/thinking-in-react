import ISearchBarProps from './ISearchBarProps';

export default function SearchBar(props: ISearchBarProps) {
  const { filterText, inStockOnly } = props;
  
  return (
    <form>
      <input type="text" value={filterText} placeholder="Search..."/>
      <label>
        <input type="checkbox" checked={inStockOnly} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
