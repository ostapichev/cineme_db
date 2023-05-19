import {FC} from 'react';

import stars from '../../assets/vectors/star.png';
import no_star from '../../assets/vectors/no_star.png';
import half_star from '../../assets/vectors/half_star.png'
import css from './Rating.module.css';


interface IProps {
    rating: number;
}

const Rating: FC<IProps> = ({rating}) => {
    const numRating: number = Math.round(rating);
    const res: number = rating - numRating;
    const total:number =  +res.toFixed(1);

    return (
        <div className={css.Rating}>
            {[...Array(numRating)]
                .map((star, index) => {
                    return <img className={css.StarRating} key={index} src={stars} alt='rating'/>
                })
            }
            <img className={css.StarRating}  src={total >= 0.1 && total <= 0.5 ? half_star : ''} alt='rating'/>
            {[...Array(10 - Math.ceil(rating))]
                .map((star, index) => {
                    return <img className={css.StarRating} key={index} src={no_star} alt='rating'/>
                })
            }
        </div>
    );
};

export {
    Rating
};