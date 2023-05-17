import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, HomePage, MoviesPage, ProfilePage} from "./pages";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
                <Route path={'profile'} element={<ProfilePage/>}/>
            </Route>
        </Routes>
  );
}

export default App;
