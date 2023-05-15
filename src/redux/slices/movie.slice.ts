import {createSlice} from '@reduxjs/toolkit';
import {IGenre, IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[];
    genres: IGenre[];
}

const initialState: IState = {
    movies: [],
    genres: []
};

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getMovie: (state, action) => {
            state.movies = action.payload;
        },
        getGenre: (state, action) => {
            state.genres = action.payload;
        }
    }
});

export const {getMovie, getGenre} = slice.actions;

export default slice.reducer;




