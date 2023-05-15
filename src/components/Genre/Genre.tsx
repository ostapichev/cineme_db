import {FC} from 'react';
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre
}
const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {
    Genre
};