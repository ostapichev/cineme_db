import {FC} from 'react';
import css from "./Poster.module.css";
import {IPoster} from "../../interfaces";


interface IProps {
    poster: string;
}

const Poster: FC<IProps> = ({poster}) => {
    const posterURL = 'https://image.tmdb.org/t/p/w500' + poster;

    return (
        <div>
            <img className={css.PosterImage} src={posterURL} alt='empty'/>
        </div>
    );
};

export {
    Poster
};