import {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieReducer, moviesAction} from "../../redux/slices";
import {options} from "../../constants";
import {useSearchParams} from "react-router-dom";

const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const {prevPage, nextPage, page} = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();
    const prev = () => {
        setQuery(prevContent => ({...prevContent, page: +prevContent.get('page')-1}));
        dispatch(moviesAction.setMovies);
        console.log(page);
        options.params.page = String(page - 1);
        console.log('hello prev');
    }
    const next = () => {
        setQuery(prevContent => ({...prevContent, page: +prevContent.get('page')+1}));
        dispatch(moviesAction.setMovies);
        console.log(page);
        options.params.page = String(page + 1);
        console.log('hello next');
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