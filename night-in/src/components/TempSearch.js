import React, { useState } from "react";
//import queryMovieById from '../api/moivedb';

function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        //queryMovieById(searchTerm);
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={handleChange}/>
                <buttton type="submit">Search</buttton>
            </form>
        </div>
    )
}

export default TempSearch