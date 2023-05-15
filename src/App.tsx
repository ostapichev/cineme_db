import {useEffect} from "react";
import axios from "axios";
import {options} from "./constants";
import {useAppDispatch, useAppSelector} from "./hooks";
import {getMovie} from "./redux/slices";

function App() {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector((state) => state.movieReducer);
    console.log(movies);
    useEffect(() => {
        axios.request(options)
            .then((response) => {
                console.log(response.data);
                dispatch(getMovie(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);

    return (
      <div>
          App
      </div>
  );
}

export default App;
