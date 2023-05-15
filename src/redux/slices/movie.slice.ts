import {createSlice} from '@reduxjs/toolkit';
import {IGenre, IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[];

}

const initialState: IState = {
    movies: [],
};

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getMovie: (state, action) => {
            state.movies = action.payload;
        }
    }
});

const {reducer: movieReducer, actions} = slice;

const moviesAction = {
    ...actions
}

export {
    movieReducer,
    moviesAction
}

export const {getMovie} = slice.actions;

export default slice.reducer;




