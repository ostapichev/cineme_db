import {FC} from 'react';

import {IGenre} from "../../interfaces";
import css from './Genre.module.css';


interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    console.log(genre)

    return (
        <div>
            <button className={css.ButtonGenre}>{name}</button>
        </div>
    );
};

export {
    Genre
};