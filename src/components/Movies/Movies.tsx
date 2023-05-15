import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesAction} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import {movieService} from "../../services";

const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector((state) => state.movieReducer);
    console.log(movies);
    useEffect(() => {
        movieService.getAll()
            .then((response) => {
                dispatch(moviesAction.setMovies(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);
    return (
        <div>
            Movies
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Movies
};