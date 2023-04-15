import React from 'react';
import s from './LocationCard.module.scss'
import time from '../../../../assets/images/time1.svg'
import star from '../../../../assets/images/star(1).svg'


function LocationCard( { image, price, country, tourName, days, raiting }) {
    return (
        <div className={s.cardWrapper}>
            <div className={s.top}>
                <img src={image} alt="" />
                <div>
                    <div><h1>${price}</h1></div>
                    <input type="checkbox" id={s.heart}/>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.title}>
                    <p>{country}</p>
                    <h1>{tourName}</h1>
                </div>
                <div>
                    <div className={s.days}>
                        <img src={time} alt="" />
                        <p>{days}</p>
                    </div>
                    <div>
                        <img src={star} alt="" />
                        <h1>{raiting}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;