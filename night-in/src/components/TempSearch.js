import React, { useState } from "react";
import '../styles/tempSearch.css'
import getMovieList from '../api/getMovieLIst';

function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        getMovieList();
    }

    return(
        <div className="temp-search">
        <form onSubmit={handleSearch}>
        <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="know what you want?"
        />
        <button type="submit">Search</button>
        </form>
            
        </div>
    )
}

export default TempSearch