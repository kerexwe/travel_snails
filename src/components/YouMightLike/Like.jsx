import React from 'react';
import s from './Like.module.scss'
import LocationCard from '../ListComponents/Locations/LocationCard/LocationCard';
import { FeaturedConst } from '../../constants/FeaturedConst'
import viewAll from '../../assets/Latest/viewAll.svg'

function Like(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.text}>
                    <h1>You Might Like</h1>
                    <a href="/list">
                        <p>View All</p>
                        <img src={viewAll} alt="" />
                    </a>
                </div>
                <div className={s.cards}>
                <h1>You Might Like</h1>

                    {
                        FeaturedConst.map((item) => <LocationCard key={item.id} {...item} />)
                    }
                    <a href="/list" className={s.textM}>
                        <p>View All</p>
                        <img src={viewAll} alt="" />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Like;