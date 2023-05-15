import {axiosService} from "./axios.service";
import {baseURL, options, urls} from "../constants";


options.url = baseURL + urls.genreURL;

console.log(options.url)
const genreService = {
    getAll: () => axiosService.request(options)
}

export {
    genreService
};