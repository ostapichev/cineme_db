import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {movieReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer
})

const setupStore = configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof setupStore.getState>;
type AppDispatch = typeof setupStore.dispatch;

export type {
    RootState,
    AppDispatch
};

export {
    setupStore
};