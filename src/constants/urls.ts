import {options} from "./config";


const baseURL: string = 'https://api.themoviedb.org/3';
const posterUrl: string = 'https://image.tmdb.org/t/p/w500';
const urls = {
    movieURL: '/discover/movie',
    genreURL: '/genre/movie/list'
}

const setURLS = (url: string) => options.url = baseURL + url;

export {
    baseURL,
    urls,
    posterUrl,
    setURLS
};