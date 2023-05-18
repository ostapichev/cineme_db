import{FC} from 'react';

import {Profile} from "../../components";
import css from './ProfilePage.module.css';


const ProfilePage: FC = () => {

    return (
        <div className={css.ProfileComponent}>
            <Profile/>
        </div>
    );
};

export {
    ProfilePage
};