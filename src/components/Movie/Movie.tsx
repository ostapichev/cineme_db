import {FC} from 'react';

import {IMovie} from "../../interfaces";
import {Poster} from "../Poster/Poster";
import {Rating} from "../Rating/Rating";
import css from './Movie.module.css';


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, release_date, genre_ids, poster_path, vote_average} = movie;

    return (
        <div className={css.Movie}>
            <Poster key={id} poster={poster_path} title={movie.title}/>
            <div className={css.InfoMovie}>
                <div className={css.TitleMovie}>{title}</div>
                <div>{release_date}, {genre_ids}</div>
                <Rating key={movie.id} rating={vote_average}/>
            </div>
        </div>
    );
};

export {
    Movie
};