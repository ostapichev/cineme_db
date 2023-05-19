import {FC} from 'react';
import css from "./Poster.module.css";
import {posterUrl} from "../../constants";
import empty from '../../assets/images/empty.jpg';

interface IProps {
    poster: string;
    title: string;
}

const Poster: FC<IProps> = ({poster, title}) => {
    const posterPath:string =  (posterUrl + poster);

    return (
        <div className={css.Posters}>
            <img className={css.PosterImage} src={posterPath || empty} alt={title}/>
        </div>
    );
};

export {
    Poster
};