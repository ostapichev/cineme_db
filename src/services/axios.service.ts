import axios from "axios";
import {options} from "../constants";

const axiosService = axios.request(options)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

export {
    axiosService
};