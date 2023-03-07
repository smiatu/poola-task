import React from 'react'
import _ from 'lodash'
import { delayedSearch } from "../../service/common";

export type Results = {
  spaces?: Space[];
  addresses?: Address[];
}

type Address = {
  address: string;
  country: string;
};

type Space = {
  name: string;
};

type SearchProps = {
  searchType: 'space' | 'address';
}

const Search = ({searchType}: SearchProps) => {
  const [filteredList, setFilteredList] = React.useState<Space[] | Address[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  
  const debouncedSearch = React.useCallback(
    _.debounce((inputValue: string) => {
      setIsLoading(true);
      setIsError(false);
      delayedSearch(inputValue, 500, searchType)
        .then((res: Results) => {
          setIsLoading(false);
          setFilteredList(res.spaces || res.addresses || [])
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true)
          setFilteredList([])
        });
    }, 500),
    []
  );
  
  const onInputChange = (inputValue: string) => {
    setInputValue(inputValue)
    debouncedSearch(inputValue)
  }
  
  let searchResults;
  if (filteredList.length > 0) {
    if (searchType === 'space') {
      searchResults = (filteredList as any[]).map((element: Space) => (
        <li key={element.name}>
          {element.name}
        </li>
      ));
    } else {
      searchResults = (filteredList as any[]).map((element: Address) => (
        <li key={Math.random()}>
          {element.address} {element.country}
        </li>
      ));
    }
  }
  
  return (
    <div>
      <input type={"text"} value={inputValue} onChange={e => onInputChange(e.target.value)}/>
      <ul>
        {searchResults}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error, please reload the page.</p>}
      {(!isLoading && filteredList?.length === 0) && <p>No search results</p>}
    </div>
  )
}

export default Search;