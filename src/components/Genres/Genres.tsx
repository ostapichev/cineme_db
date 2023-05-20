import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {genreActions} from "../../redux/slices";
import {genreService} from "../../services";
import {Genre} from "../Genre/Genre";
import {setURLS, urls} from "../../constants";
import css from './Genres.module.css';
import logoTMDB from '../../assets/images/logoTMDB.png';


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
            <div className={css.BlockHeader}>
                <h1 className={css.GenreHeader}>Genres of movies</h1>
            </div>
            <div className={css.GenresBlock}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            <div className={css.Logo}>
                <img src={logoTMDB} alt='logo'/>
            </div>
        </div>
    );
};

export {
    Genres
};