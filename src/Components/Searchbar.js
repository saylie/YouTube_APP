import React, {useState} from 'react';
import { CiSearch } from "react-icons/ci";

const Searchbar = ({updateSearchResults}) =>{
    const [searchInput, setSearchInput] = useState();

    const handleInputChange = (event) =>{
        setSearchInput(event.target.value)
    }
    const onSearchButtonClick = () =>{
        console.log('Searching for:', searchInput);
        updateSearchResults(searchInput)
    }
    return(
        <>
            <div className='search-container'>
                <input className='search-input'placeholder="Search" value={searchInput} onChange={handleInputChange}></input>
                <button className='search-button' onClick={onSearchButtonClick}><CiSearch/></button>
            </div>
        </>
    )

}

export default Searchbar