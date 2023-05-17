import React, {FC} from 'react';
import css from './Search.module.css';

const Search: FC = () => {

    return (
        <div className={css.Search}>
            <input className={css.SearchInput} type='text' placeholder='Search a movie here'/>
            <button className={css.SearchButton}>Search</button>
        </div>
    );
};

export {
    Search
};