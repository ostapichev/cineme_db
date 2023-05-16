import {axiosService} from "./axios.service";
import {options} from "../constants";

const movieService = {
    getAll: (page = 1) => axiosService.request(options)
}

export {
    movieService
};