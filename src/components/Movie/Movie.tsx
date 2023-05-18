import {FC} from 'react';

import {IMovie} from "../../interfaces";


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, genre_ids} = movie;

    return (
        <div>
            <div>title: {title}</div>
            <div>genre_ids: {genre_ids}</div>
            <img></img>
        </div>
    );
};

export {
    Movie
};