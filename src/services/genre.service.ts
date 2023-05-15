import {axiosService} from "./axios.service";
import {options} from "../constants";

const genreService = {
    getAll: () => axiosService.request(options)
}

export {
    genreService
};