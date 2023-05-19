import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {Poster} from "../Poster/Poster";



interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, genre_ids, poster_path} = movie;
    console.log(poster_path);

    return (
        <div>
            <div>title: {title}</div>
            <div>genre_ids: {genre_ids}</div>
            <Poster poster={movie.poster_path}/>
        </div>
    );
};

export {
    Movie
};