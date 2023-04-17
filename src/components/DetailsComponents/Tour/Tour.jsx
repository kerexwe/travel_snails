import React from 'react';
import s from './Tour.module.scss'
import share from '../../../assets/images/share.svg'
import fav from '../../../assets/images/fav.svg'
import star from '../../../assets/images/star(1).svg'
import location from '../../../assets/images/location.svg'
import user from '../../../assets/images/Avatar.svg'
import calendar from '../../../assets/images/ic_calendar.svg'
import location1 from '../../../assets/images/location1.svg'
import language from '../../../assets/images/language.svg'
import time from '../../../assets/images/time2.svg'
import name from '../../../assets/images/name.svg'
import phone from '../../../assets/images/phone.svg'
import day1 from '../../../assets/images/day1.svg'
import day2 from '../../../assets/images/day2.svg'
import day3 from '../../../assets/images/day3.svg'
import facebook from '../../../assets/images/facebook1.svg'
import inst from '../../../assets/images/inst1.svg'
import inn from '../../../assets/images/in1.svg'
import twitter from '../../../assets/images/twitter1.svg'
import guests from '../../../assets/images/guests.svg'
import data from '../../../assets/images/data.svg'


function Tour(props) {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.tour}>
                    <div className={s.title}>
                        <h1>Estonia City Tour</h1>
                        <div>
                            <img src={share} alt="" />
                            <div className={s.heart}>
                            <div class="checkbox-heart">
                              <input class="checkbox-heart--origin" id="4" type="checkbox" />
                                <div class="checkbox-heart--custom custom--heart">
                                    <div class="checkbox-heart--custom__inner"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.left}>
                            <img src={star} alt="" />
                            <h1>4.6</h1>
                            <p>(234 reviews)</p>
                        </div>
                        <div className={s.center}>
                            <img src={location} alt="" />
                            <p>Tokyo, Jappan</p>
                        </div>
                        <div className={s.right}>
                            <img src={user} alt="" />
                            <div>
                                <p>Tour guide by </p>
                                <p className={s.p2}> Kevin Francis</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.overview}>
                        <h1>Tour Overview</h1>
                        <div>
                            <div>
                                <div>
                                    <img src={calendar} alt="" />
                                    <div>
                                        <p>Available </p>
                                        <p className={s.pp}>03/01/2019 - 01/30/2023</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={location1} alt="" />
                                    <div>
                                        <p>Location </p>
                                        <p className={s.pp}>London</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={time} alt="" />
                                    <div>
                                        <p>Durations</p>
                                        <p className={s.pp}>4 days 3 nights</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={name} alt="" />
                                    <div>
                                        <p>Contact name</p>
                                        <p className={s.pp}>Kevin Francis</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={phone} alt="" />
                                    <div>
                                        <p>Contact phone</p>
                                        <p className={s.pp}>(308) 555-0121</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={language} alt="" />
                                    <div>
                                        <p>Languages</p>
                                        <p className={s.pp}>Russian, Spanish</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.description}>
                        <h1>Tour Description</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br />
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={s.description}>
                        <h1>Tour Highlights</h1>
                        <ul>
                            <li><p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p></li>
                            <li><p>Vulputate placerat amet pulvinar lorem nisl.</p></li>
                            <li><p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p></li>
                            <li><p>Etiam duis lobortis in fames ultrices commodo nibh.</p></li>
                        </ul>
                    </div>
                    <div className={s.includes}>
                        <h1>Tour Includes</h1>
                        <div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Audio guide</p>
                                </div>
                                <div>
                                    <input type="Checkbox" />
                                    <p>Food and drinks</p>
                                </div>
                                <div>
                                    <input type="Checkbox" />
                                    <p>Lunch</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Private tour</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Special activities</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Entrance fees</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Gratuities</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Pick-up and drop off</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Professional guide</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Transport by air-conditioned</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.program}>
                        <h1>Tour Program</h1>
                        <div>
                            <img src={day1} alt="" />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br />
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div>
                            <img src={day2} alt="" />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br />
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div>
                            <img src={day3} alt="" />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br />
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>

                    </div>
                    <div className={s.button}>
                        <p>Share:</p>
                        <div>
                            <button><img src={facebook} alt="" /> <p>Facebook</p></button>
                            <button className={s.button1}><img src={inst} alt="" /> <p>Facebook</p></button>
                            <button className={s.button2}><img src={inn} alt="" /> <p>Facebook</p></button>
                            <button className={s.button3}><img src={twitter} alt="" /> <p>Facebook</p></button>
                        </div>
                    </div>
                </div>
                <div className={s.price}>
                    <div className={s.information}>
                        <div className={s.cost}>
                            <h1>$199</h1>
                            <h1 id={s.h1}>$199</h1>
                            <p>/Tour</p>
                        </div>
                        <div className={s.inputs}>
                            <div>
                                <img src={data} alt="" />
                                <input type="text" placeholder='Departure day' />
                            </div>
                            <div>
                                <img src={guests} alt="" />
                                <input type="text" placeholder='Guests' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Service charge</p>
                                <p className={s.pg}>$357</p>
                            </div>
                            <div>
                                <p>Discount</p>
                                <p className={s.pg}>-</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={s.booking}>
                        <div>
                            <h1>Total</h1>
                            <h1>$357</h1>
                        </div>
                        <button><a href="/checkout">Reserve</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;