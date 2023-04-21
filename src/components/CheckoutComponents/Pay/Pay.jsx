import React from 'react';
import s from './Pay.module.scss'
import number1 from '../../../assets/images/number1.svg'
import number2 from '../../../assets/images/number2.svg'
import star from '../../../assets/images/star(1).svg'
import bg from '../../../assets/images/IMG11.svg'
import user from '../../../assets/images/user.svg'
import paypal from '../../../assets/images/ic_paypal.svg'
import mastercard from '../../../assets/images/ic_mastercard.svg'
import visa from '../../../assets/images/visa-logo.svg'
import departure from '../../../assets/images/ic_calendar.svg'
import guests from '../../../assets/images/guests.svg'


// import dep from '../../../assets/images/ic_calendar.svg'


function Pay(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.confirm}>
                    <h1>Confirm and Pay</h1>
                    <hr />
                    <div className={s.first}>
                        <div className={s.title}>
                            <img src={number1} alt="" />
                            <h1>Shipping Information</h1>
                        </div>
                        <p>Billing Address</p>
                        <div>
                            <div className={s.input}>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <input type="text" placeholder='Full Address' />
                            <input type="text" placeholder='Full Address 2 (optional)' />
                        </div>
                        <div className={s.radio}>
                            <p>Shipping Address</p>
                            <div>
                                <p>Same as Billing Address</p>
                                checkbox
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <input type="text" placeholder='Full Address' />
                            <input type="text" placeholder='Full Address 2 (optional)' />
                        </div>

                    </div>
                    <hr />
                    <div className={s.title}>
                        <img src={number2} alt="" />
                        <h1>Shipping Information</h1>
                    </div>
                    <div className={s.ckeck}>
                        <input type="radio" />
                        <div>
                            <h1>Pay with Paypal</h1>
                            <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                        </div>
                        <img src={paypal} alt="" />
                    </div>
                    <div className={s.secondCheck}>
                        <div className={s.ckeck}>
                            <input type="checkbox" />
                            <div>
                                <h1>Credit / Debit Card</h1>
                                <p>We support Mastercard, Visa, Discover and Stripe.</p>
                            </div>
                            <div className={s.card}>
                                <img src={mastercard} alt="" />
                                <img src={visa} alt="" />
                            </div>
                        </div>
                        <div className={s.input2}>
                            <input type="text" placeholder='Card Number XXXX XXXX XXXX XXXX' />
                            <input type="text" />
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.booking}>
                    <div className={s.main}>
                        <img src={bg} alt="" />
                        <div>
                            <div className={s.top}>
                                <h1>Warsaw Day Tour</h1>
                                <div>
                                    <img src={star} alt="" />
                                    <h1>4.6</h1>
                                    <p>(234 reviews)</p>
                                </div>
                            </div>
                            <div className={s.bottom}>
                                <img src={user} alt="" />
                                <div className={s.guide}>
                                    <p>Tour guide by </p>
                                    <h1>Kevin Francis</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.center}>
                        <div className={s.input}>
                            <div>
                                <img src={departure} alt="" />
                                <div>
                                    <p>Departure day</p>
                                    <h1>19 Apr 2019</h1>
                                </div>
                            </div>
                            {/* <hr className={s.inputBorder}/> */}
                            <div>
                                <img src={guests} alt="" />
                                <div>
                                    <p>Guests</p>
                                    <h1>4 guest</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Service charge</p>
                                <h1>$357</h1>
                            </div>
                            <div>
                                <p>Discount</p>
                                <h1>-</h1>
                            </div>
                        </div>
                    </div>
                    <div className={s.button}>
                        <div>
                            <h1>Total</h1>
                            <h1>345$ </h1>
                        </div>
                        <button> <a href="/completed">Complete Booking</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;