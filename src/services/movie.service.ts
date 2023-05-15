import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll: () => axiosService.get(urls.movieURL)
}

console.log(movieService.getAll);

export {
    movieService
};