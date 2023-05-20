import {FC} from 'react';
import {useAppSelector} from "../../hooks";

import {Genre} from "../Genre/Genre";
import css from './Genres.module.css';
import logoTMDB from '../../assets/images/logoTMDB.png';


const Genres: FC = () => {
    const {genres} = useAppSelector((state) => state.genreReducer);

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