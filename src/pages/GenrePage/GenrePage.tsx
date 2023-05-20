import {FC} from 'react';

import {useAppSelector} from "../../hooks";


const GenrePage: FC = () => {
    const {genres} = useAppSelector((state) => state.genreReducer);
    console.log(genres);

    return (
        <div>
            Genres Page
        </div>
    );
};

export {
    GenrePage
};