import {NavLink} from "react-router-dom";
import {FC} from 'react';

import css from './Header.module.css';
import charlie from '../../assets/images/charlie.jpg';


const Header: FC = () => {

    return (
        <div className={css.Header}>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <div className={css.Login}>
                <NavLink to={'profile'} className={css.LoginLink}>
                    <img className={css.Avatar} src={charlie} alt='Charlie Chaplin'/>
                    <p className={css.NickName}>Movie_man</p>
                </NavLink>
            </div>
        </div>
    );
};

export {
    Header
};