import {FC} from 'react';

import charlie from "../../assets/images/charlie.jpg";
import css from './Profile.module.css';

const Profile: FC = () => {

    return (
        <div>
            <h1 className={css.MainText}>Profile User</h1>
            <div className={css.BlockData}>
                <ul className={css.DataUser}>
                    <li>Username: </li>
                    <li>Name: </li>
                    <li>Surname: </li>
                    <li>Country: </li>
                    <li>City: </li>
                    <li>e-mail: </li>
                </ul>
                <div className={css.UserEdit}>
                    <img className={css.AvatarLogo} src={charlie} alt='profile'/>
                    <div className={css.BlockButton}>
                        <button>Logout</button>
                        <button>Edit profile</button>
                        <button>Delete profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    Profile
};