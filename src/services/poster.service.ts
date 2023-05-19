import {axiosService} from "./axios.service";
import {posterUrl} from "../constants";


const posterService = {
    getAll: () => axiosService.get('https://image.tmdb.org/t/p/w500/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg')
}

export {
    posterService
};