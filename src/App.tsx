import {useEffect} from "react";
import axios from "axios";
import {options} from "./constants";

function App() {
    useEffect(() => {
        axios.request(options)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
      <div>
          App
      </div>
  );
}

export default App;
