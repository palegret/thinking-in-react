export default interface ISearchBarProps { 
  filterText: string; 
  showInStockOnly: boolean; 
  onFilterTextChange: (text: string) => void;
  onShowInStockOnlyChange: (value: boolean) => void;
}
