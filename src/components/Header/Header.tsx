import {NavLink} from "react-router-dom";
import {FC} from 'react';

const Header: FC = () => {
    return (
        <div>
            <NavLink to={'home'}>HOME</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
        </div>
    );
};

export {
    Header
};