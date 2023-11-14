import axios from "axios";
import apiKeys from './apikey';


const api_key = apiKeys.key;
const request_token_url = 'https://api.themoviedb.org/3/authentication/token/new';

async function getRequestTokenFromTMDB(){
    try{
        const response = await axios.get(request_token_url, {
            params:{
                api_key:api_key,
            }
        })

        const request_token = response.data.request_token;
        console.log('Token:', request_token);

        }catch (error){
            console.log('error getting request_token')
        }}


async function getMovieList(){
    const request_token = getRequestTokenFromTMDB();
    const discoverMoviesUrl = 'https://api.themoviedb.org/3/discover/movie';
    
    try{
        const response = await axios.get(discoverMoviesUrl, {
            params:{
                api_key:api_key,
                sort_by:'date.desc'
            },
        });

        const movies = response.data.results;
        console.log('List of movies', movies);
    }
    catch (error) {
        console.log('Error getting movies', error)
    }
}


export default getMovieList()
