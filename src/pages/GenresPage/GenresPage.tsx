import {FC} from 'react';

import {Genres} from "../../components";
import css from './GenresPage.module.css';


const GenresPage: FC = () => {

    return (
        <div className={css.GenresPage}>
            <Genres/>
        </div>
    );
};

export {
    GenresPage
};