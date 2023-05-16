import {FC} from 'react';

import {Movies, Pagination} from "../components";


const MoviesPage: FC = () => {

    return (
        <div>
            <Pagination/>
            <Movies/>
        </div>
    );
};

export {
    MoviesPage
};