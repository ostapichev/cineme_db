import {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genre.module.css';



interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const handleClick = () => {
        console.log(genre.name);
    }

    return (
        <div>
            <NavLink to={'genre'}>
                <button className={css.ButtonGenre} onClick={handleClick}>
                    {name}
                </button>
            </NavLink>
        </div>
    );
};

export {
    Genre
};