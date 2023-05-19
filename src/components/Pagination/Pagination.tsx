import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesAction} from "../../redux/slices";
import {options} from "../../constants";
import css from './Pagination.module.css'


const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const {prevPage, nextPage, page} = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();
    const prev = () => {
        setQuery(prevContent => ({...prevContent, page: +prevContent.get('page')-1}));
        dispatch(moviesAction.setMovies);
        options.params.page = String(page - 1);
    }
    const next = () => {
        setQuery(prevContent => ({...prevContent, page: +prevContent.get('page')+1}));
        dispatch(moviesAction.setMovies);
        options.params.page = String(page + 1);
    }

    return (
        <div className={css.Pagination}>
            <button className={css.ButtonPagination} disabled={!prevPage} onClick={prev}>&#60;&#60; prev page</button>
            <h1 className={css.HeaderPagination}>Choice a movie</h1>
            <button className={css.ButtonPagination} disabled={!nextPage} onClick={next}>next page &#62;&#62;</button>
        </div>
    );
};

export {
    Pagination
};