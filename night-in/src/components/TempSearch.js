import React, { useState } from "react";
import getMovieList from '../api/getMovieLIst';
import getMovieById from "../api/getMovieById";

function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        getMovieList();
        getMovieById(1161276)
        
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default TempSearch