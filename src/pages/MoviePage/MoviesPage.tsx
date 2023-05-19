import {FC} from 'react';

import {Movies, Pagination} from "../../components";
import css from './MoviePage.module.css';


const MoviesPage: FC = () => {

    return (
        <div className={css.MoviesPage}>
            <Pagination/>
            <Movies/>
        </div>
    );
};

export {
    MoviesPage
};