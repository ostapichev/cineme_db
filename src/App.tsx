import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import axios from "axios";

import {useAppDispatch, useAppSelector} from "./hooks";
import {movieURL, options} from "./constants";
import {moviesAction} from "./redux/slices";
import {GenresPage, HomePage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";


function App() {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector((state) => state.movieReducer);
    options.url = options.url + movieURL;
    console.log(movies);
    useEffect(() => {
        axios.request(options)
            .then((response) => {
                dispatch(moviesAction.getMovie(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
  );
}

export default App;
