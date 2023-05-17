import React, {FC} from 'react';

import {Search} from "../../components";
import css from './HomePage.module.css';
import backgroundHome from '../../assets/images/backgroundHome.png';


const HomePage: FC = () => {

    return (
        <div className={css.HomePage}>
            <Search/>
            <img className={css.BackgroundHome} src={backgroundHome} alt='background'/>
        </div>
    );
};

export {
    HomePage
};