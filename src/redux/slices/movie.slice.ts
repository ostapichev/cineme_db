import {createSlice} from '@reduxjs/toolkit';
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[];
    prevPage: null;
    nextPage: null;
}

const initialState: IState = {
    movies: [],
    prevPage: null,
    nextPage: null
};

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {results, page} = action.payload;
            state.movies = results;
        }
    }
});

const {reducer: movieReducer, actions} = slice;

const moviesAction = {
    ...actions
};

export {
    movieReducer,
    moviesAction
};




