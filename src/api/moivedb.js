import axios from "axios";
import apiKeys from './apiKeys.conf';


function queryMovieByID(movieId){
//make a request using the user ID
axios.get(`https://api.themoviedb.org/3/movie${movieId}?${apiKeys.apiKey}`)
    .then(function (response) {
        // handle success
        console.log(response)
        return(response);
    })

    .catch(function (error) {
        //handle error
        console.log(error);
        return(error)
    });
}




export default queryMovieByID();