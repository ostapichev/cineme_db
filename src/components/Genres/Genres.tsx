import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {genreActions} from "../../redux/slices";
import {genreService} from "../../services";
import {Genre} from "../Genre/Genre";
import {setURLS, urls} from "../../constants";


const Genres: FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector((state) => state.genreReducer);

    setURLS(urls.genreURL);
    useEffect(() => {
        genreService.getAll()
            .then(response => response.data)
            .then(response => dispatch(genreActions.setGenres(response))
            )}, [dispatch]);

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