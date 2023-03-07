import React from 'react'
import _ from 'lodash'
import {delay, searchSpaces} from "../../service/search";

const Search = () => {
    const [filteredList, setFilteredList] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const debouncedSearchSpaces = React.useCallback(
        _.debounce((inputValue) => {
            searchSpaces(inputValue)
                .then(() => delay(500))
                .then((res) => setFilteredList(res.spaces))
                .catch(() => setFilteredList([]));
        }, 500),
        []
    );

    const onInputChange = (inputValue) => {
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
            {filteredList?.length === 0 && <p>Something went wrong</p>}
        </div>
    )
}

export default Search;