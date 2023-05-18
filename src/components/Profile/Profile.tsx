import {FC} from 'react';

import charlie from "../../assets/images/charlie.jpg";
import css from './Profile.module.css';

const Profile: FC = () => {

    return (
        <div className={css.ProfileContainer}>
            <h1 className={css.MainText}>Profile List</h1>
            <div className={css.UserEdit}>
                <img className={css.AvatarLogo} src={charlie} alt='profile'/>
            </div>
            <div className={css.BlockData}>
                <ul className={css.DataUser}>
                    <li className={css.Data}>Username: </li>
                    <li className={css.Data}>Name: </li>
                    <li className={css.Data}>Surname: </li>
                    <li className={css.Data}>Country: </li>
                    <li className={css.Data}>City: </li>
                    <li className={css.Data}>e-mail: </li>
                </ul>
                <ul className={css.DataUserField}>
                    <li className={css.DataField}>Movie_man </li>
                    <li className={css.DataField}>Murlan</li>
                    <li className={css.DataField}>Belohvosty</li>
                    <li className={css.DataField}>Ukraine</li>
                    <li className={css.DataField}>Saltovskiy preriyi</li>
                    <li className={css.DataField}>e-mail: murlan@google.mail</li>
                </ul>
            </div>
            <div className={css.BlockButton}>
                <button className={css.ButtonProfile}>Logout</button>
                <button className={css.ButtonProfile}>Edit profile</button>
                <button className={css.ButtonProfile}>Delete profile</button>
            </div>
        </div>
    );
};

export {
    Profile
};