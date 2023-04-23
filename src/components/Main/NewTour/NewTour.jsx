import React, { useState } from 'react';
import s from './NewTour.module.scss'
import dollar from '../../../assets/images/dollar.svg'
import star from '../../../assets/images/star.svg'
import time from '../../../assets/images/time.svg'
import location from '../../../assets/images/orangeLoc.svg'
import thailand from '../../../assets/images/thailand.svg'
import india from '../../../assets/images/India.svg'
import london from '../../../assets/images/London.svg'
import Input from '../../Input/Input';

function NewTour(props) {
    return (
        <div className={s.wrapper}>
            <div className='container'>
                <div className={s.center}>
                    <p>NEW TOUR</p>
                    <h1 >Thailand Tour</h1>
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
                    <button><a href="/details">Book now</a></button>
                </div>
                <div className={s.buttons}>
                    <button>
                        <img src={thailand} alt="" />
                        <div>
                            <h1>Thailand</h1>
                            <div>
                                <img src={location} alt="" />
                                <p>Asia</p>
                            </div>
                        </div>
                    </button>
                    <button>
                        <img src={london} alt="" />
                        <div>
                            <h1>London</h1>
                            <div>
                                <img src={location} alt="" />
                                <p>Asia</p>
                            </div>
                        </div>
                    </button>
                    <button>
                        <img src={india} alt="" />
                        <div>
                            <h1>India</h1>
                            <div>
                                <img src={location} alt="" />
                                <p>Asia</p>
                            </div>
                        </div>
                    </button>
                </div>
                </div>
                <div className={s.input}>
                <Input/>
                </div>
            </div>
    );
}

export default NewTour;