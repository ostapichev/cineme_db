import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux/slices";
import {genreService} from "../../services";
import {Genre} from "../Genre/Genre";

const Genres: FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector((state) => state.genreReducer);
    console.log(genres);
    useEffect(() => {
        genreService.getAll()
            .then((response) => {
                dispatch(genreActions.setMovies(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);

    return (
        <div>
            Genres
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
};