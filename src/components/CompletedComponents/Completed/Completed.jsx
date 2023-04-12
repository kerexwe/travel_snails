import React from 'react';
import completed from '../../../assets/images/completed.svg'
import s from './Completed.module.scss'
import star from '../../../assets/images/star(1).svg'
import ava from '../../../assets/images/ava1.svg'
import calendar from '../../../assets/images/ic_calendar.svg'
import card from '../../../assets/images/ic_credit_card.svg'
import guests from '../../../assets/images/ic_users_group.svg'
import cube from '../../../assets/images/ic_cube_outline.svg'
import receipt from '../../../assets/images/ic_receipt.svg'
import prev from '../../../assets/images/prev.svg'
import down from '../../../assets/images/down.svg'


function Completed(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <img src={completed} alt="" />
                <div>
                    <h1>Completed 🎉</h1>
                    <div>
                        <div>
                            <h1>Warsaw Day Tour</h1>
                            <div>
                                <img src={star} alt="" />
                                <h1>4.6</h1>
                                <p id={s.pp}>(234 reviews)</p>
                            </div>
                        </div>
                        <div className={s.guide}>
                            <img src={ava} alt="" />
                            <div>
                                <p>Tour guide by </p>
                                <p id={s.p}>Kevin Francis</p>
                            </div>
                        </div>
                        </div>
                        <div className={s.details}>
                            <h1>Booking Details</h1>
                            <div className={s.lists}>
                                <div className={s.list}>
                                    <div>
                                        <img src={calendar} alt="" />
                                        <p>Departure day</p>
                                    </div>
                                    <p>19 Apr 2019</p>
                                </div>
                                <div className={s.list}>
                                    <div>
                                        <img src={guests} alt="" />
                                        <p>Guests</p>
                                    </div>
                                    <p>2 guest</p>
                                </div>

                                <hr />
                                <div className={s.list}>
                                    <div>
                                        <img src={cube} alt="" />
                                        <p>Booking code</p>
                                    </div>
                                    <p>KU_H8SDM</p>
                                </div>
                                <div className={s.list}>
                                    <div>
                                        <img src={receipt} alt="" />
                                        <p>Booking day</p>
                                    </div>
                                    <p>23 Dec 2019</p>
                                </div>
                                <div className={s.list}>
                                    <div>
                                        <img src={calendar} alt="" />
                                        <p>Total</p>
                                    </div>
                                    <p>$357</p>
                                </div>
                                <div className={s.list}>
                                    <div>
                                        <img src={card} alt="" />
                                        <p>Departure day</p>
                                    </div>
                                    <p>Paypal</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.buttons}>
                        <button>
                             <img src={prev} alt="" /> 
                             <p>Back Home</p>
                        </button>
                        <button id={s.button2}>
                            <img src={down} alt="" />
                            <p>Download Invoice</p>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default Completed;