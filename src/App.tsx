import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, GenresPage, HomePage, MoviesPage, ProfilePage} from "./pages";
import {useAppDispatch, useAppSelector} from "./hooks";
import {setURLS, urls} from "./constants";
import {useEffect} from "react";
import {genreService} from "./services";
import {genreActions} from "./redux/slices";


const App = () => {

    const dispatch = useAppDispatch();
    setURLS(urls.genreURL);
    useEffect(() => {
        genreService.getAll()
            .then(response => response.data)
            .then(response => dispatch(genreActions.setGenres(response))
            )}, [dispatch]);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
                <Route path={'genres/genre'} element={<GenrePage/>}/>
                <Route path={'profile'} element={<ProfilePage/>}/>
            </Route>
        </Routes>
  );
}

export default App;
