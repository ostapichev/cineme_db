import {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title, genre_ids} = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>original_title: {original_title}</div>
            <div>genre_ids: {genre_ids}</div>
        </div>
    );
};

export {
    Movie
};