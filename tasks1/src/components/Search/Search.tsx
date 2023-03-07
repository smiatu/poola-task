import React from 'react'
import _ from 'lodash'
import { delayedSearchSpaces, Results, Space } from "../../service/search";

const Search = () => {
    const [filteredList, setFilteredList] = React.useState<Space[]>([]);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const debouncedSearchSpaces = React.useCallback(
        _.debounce((inputValue) => {
          setIsLoading(true);
            delayedSearchSpaces(inputValue, 500)
                .then((res: Results) => {
                  setIsLoading(false);
                  setFilteredList(res.spaces)
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
        debouncedSearchSpaces(inputValue)
    }

    let searchResults = filteredList?.map((element) => (
        <li key={element.name}>{element.name}</li>
    ));

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