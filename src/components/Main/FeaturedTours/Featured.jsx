import React from 'react';
import s from './Featured.module.scss'
import LocationCard from '../../ListComponents/Locations/LocationCard/LocationCard.jsx';
import { FeaturedConst } from '../../../constants/FeaturedConst'

function Featured(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <h1>Featured Tours</h1>
                    <p>Our Featured Tours can help you find the trip that's perfect for you!</p>
                </div>
                <div className={s.cards}>
                {
                    FeaturedConst.map((item) => <LocationCard key={item.id} {...item} />)
                }
                </div>
                <button><a href="/list">View All Tours</a></button>
            </div>
        </div>
    );
}

export default Featured;