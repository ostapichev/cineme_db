import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieURL, options} from "../../constants";
import axios from "axios";
import {moviesAction} from "../../redux/slices";
import {Movie} from "../Movie/Movie";

const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector((state) => state.movieReducer);
    options.url = options.url + movieURL;
    console.log(movies);
    useEffect(() => {
        axios.request(options)
            .then((response) => {
                dispatch(moviesAction.getMovie(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);
    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Movies
};