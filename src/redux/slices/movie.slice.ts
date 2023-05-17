import {createSlice} from '@reduxjs/toolkit';

import {IMovie} from "../../interfaces";


interface IState {
    movies: IMovie[];
    prevPage: boolean;
    nextPage: boolean;
    page: number;
}

const initialState: IState = {
    movies: [],
    prevPage: false,
    nextPage: true,
    page: 1
};
const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {page, results} = action.payload;
            state.movies = results;
            state.page = page;
            switch (page) {
                case 1:
                    state.prevPage = false;
                    break;
                case 500:
                    state.nextPage = false;
                    break;
                default:
                    state.prevPage = true;
                    state.nextPage = true;
            }
        },
    },
});
const {reducer: movieReducer, actions} = slice;
const moviesAction = {
    ...actions
};

export {
    movieReducer,
    moviesAction
};




