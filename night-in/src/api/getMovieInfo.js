import axios from "axios";
import apiKeys from './apikey';


async function getMovieInfo(movie_id){
    const movieInfoUrl = `https://api.themoviedb.org/3/movie/${movie_id}?${apiKeys.key}`;
    
    try{
        const response = await axios.get(movieInfoUrl, {
            params:{
                api_key: apiKeys.key,
            },
        });
        const movieInfo = response.data.results.overview;
        console.log('Movie information:', movieInfo);
    } catch (error) {
        console.error('Error getting movie info', error);
    }
}

export default getMovieInfo