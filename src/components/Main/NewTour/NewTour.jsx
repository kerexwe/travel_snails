import React from 'react';
import s from './NewTour.module.scss'
import dollar from '../../../assets/images/dollar.svg'
import star from '../../../assets/images/star.svg'
import time from '../../../assets/images/time.svg'
import data from '../../../assets/images/data.svg'
import location1 from '../../../assets/images/location1.svg'
import guests from '../../../assets/images/guests.svg'

function NewTour(props) {
    return (
        // <div className={s.wrapper}>
            // <div className='container'>
                <div className={s.wrapper}>
                <div className={s.center}>
                    <p>NEW TOUR</p>
                    <h1>Thailand Tour</h1>
                    <div className={s.disc}>
                        <div>
                            <img src={time} alt="" />
                            <p>3 days 2 nights</p>
                        </div>
                        <div>
                            <img src={star} alt="" />
                            <p>4.8 reviews</p>
                        </div>
                        <div>
                            <img src={dollar} alt="" />
                            <p>Starting at $69</p>
                        </div>
                    </div>
                    <button><a href="">Book now</a></button>
                </div>
                <div className={s.bottom}>
                    <div>
                        <input type="text" placeholder='search' />
                        <img src={location1} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='search' />
                        <img src={data} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='search' />
                        <img src={guests} alt="" />
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default NewTour;