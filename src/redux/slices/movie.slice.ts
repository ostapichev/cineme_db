import {createSlice} from '@reduxjs/toolkit';
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[];
    prevPage: number;
    nextPage: number;
}

const initialState: IState = {
    movies: [],
    prevPage: 0,
    nextPage: 0
};

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {page, results} = action.payload;
            state.movies = results;
            state.prevPage = page;
            state.nextPage = page;
        },
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




