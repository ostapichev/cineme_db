import {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesAction} from "../../redux/slices";
import {movieService} from "../../services";
import {Movie} from "../Movie/Movie";
import {setURLS, urls} from "../../constants";
import css from './Movies.module.css';


const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector((state) => state.movieReducer);

    const [query, setQuery] = useSearchParams();


    console.log(movies)
    setURLS(urls.movieURL);
    useEffect(() => {
        setQuery( prev => ({...prev, page: '1'}));
    }, []);
    useEffect(() => {
        movieService.getAll(+query.get('page'))
            .then(response => response.data)
            .then(response => dispatch(moviesAction.setMovies(response))
            )}, [query, dispatch]);

    return (
        <div className={css.MovieCards}>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {
    Movies
};