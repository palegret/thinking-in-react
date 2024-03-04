import ISearchBarProps from './ISearchBarProps';

export default function SearchBar(props: ISearchBarProps) {
  const { 
    filterText, 
    showInStockOnly, 
    onFilterTextChange, 
    onShowInStockOnlyChange 
  } = props;
  
  return (
    <form>
      <input 
        type="text" 
        placeholder="Search..." 
        value={filterText} 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label className='ms-fontColor-themePrimary'>
        <input 
          type="checkbox" 
          checked={showInStockOnly} 
          onChange={(e) => onShowInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
