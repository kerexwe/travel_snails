import React from 'react';
import s from './Pay.module.scss'
import number1 from '../../../assets/images/number1.svg'
import number2 from '../../../assets/images/number2.svg'
import star from '../../../assets/images/star(1).svg'
import bg from '../../../assets/images/IMG.svg'
import user from '../../../assets/images/user.svg'
import paypal from '../../../assets/images/paypal.svg'
import mastercard from '../../../assets/images/ic_mastercard.svg'
import visa from '../../../assets/images/visa-logo.svg'


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
                                <h1>Pay with Paypal</h1>
                                <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                            </div>
                            <div>
                                <img src={mastercard} alt="" />
                                <img src={visa} alt="" />
                            </div>
                        </div>
                        <div className={s.input1}>
                            <input type="text" placeholder='Full Address' />
                            <input type="text" placeholder='Full Address 2 (optional)' />
                            <div>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                        </div>

                    </div>
                </div>

                <div className={s.booking}>
                    <div>
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
                                <div>
                                    <p>Tour guide by </p>
                                    <h1>Kevin Francis</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    divider
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Pay;