import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesAction} from "../../redux/slices";
import {options} from "../../constants";


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
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {
    Pagination
};