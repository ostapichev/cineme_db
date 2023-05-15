import {axiosService} from "./axios.service";
import {baseURL, options, urls} from "../constants";


options.url = baseURL + urls.movieURL;
const movieService = {
    getAll: () => axiosService.request(options)
}

console.log(options.url);

export {
    movieService
};