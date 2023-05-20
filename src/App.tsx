import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, GenresPage, HomePage, MoviesPage, ProfilePage} from "./pages";


const App = () => {

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
