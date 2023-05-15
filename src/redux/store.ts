import {configureStore} from '@reduxjs/toolkit';
import slice from './slices/movie.slice';

export const store = configureStore({
    reducer: {
        movie: slice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;