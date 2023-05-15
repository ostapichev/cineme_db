import {axiosService} from "./axios.service";
import {baseURL, options, urls} from "../constants";


options.url = baseURL + urls.genreURL;

const genreService = {
    getAll: () => axiosService.request(options)
}

export {
    genreService
};