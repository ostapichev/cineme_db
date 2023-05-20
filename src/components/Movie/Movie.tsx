import {FC} from 'react';

import {IGenre, IMovie} from "../../interfaces";
import {Poster} from "../Poster/Poster";
import {Rating} from "../Rating/Rating";
import css from './Movie.module.css';
import {useAppSelector} from "../../hooks";


interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, release_date, genre_ids, poster_path, vote_average} = movie;
    const {genres} = useAppSelector((state) => state.genreReducer);
    const filteredGenres: IGenre[] = genres.filter(genre => {
        return genre_ids.includes(genre.id);
    });
    const genreNames: string[] = filteredGenres.map(genre => genre.name);
    const genreString: string = genreNames.join(', ');

    return (
        <div className={css.Movie}>
            <Poster key={id} poster={poster_path} title={movie.title}/>
            <div className={css.InfoMovie}>
                <div className={css.TitleMovie}>{title}</div>
                <div>{release_date}</div>
                <div className={css.ShowInfoMovie}>{genreString}</div>
                <Rating key={movie.id} rating={vote_average}/>
            </div>
        </div>
    );
};

export {
    Movie
};