import React from 'react'
import css from './Destinations.module.scss'
import city1 from '../../../assets/images/city1.png'
import city2 from '../../../assets/images/city2.png'
import city3 from '../../../assets/images/city3.png'
import city4 from '../../../assets/images/city4.png'
import icon from '../../../assets/images/icon_map.svg'

function Destinations() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.text}>
                    <h1>Our Favorite <br /> Destinations</h1>
                    <p>Since wire-frame renderings are relatively <br /> simple and fast to calculate, they are often <br /> used in cases</p>
                    <ul>
                        <li><span>First Class Flights</span></li>
                        <li><span>5 Star Accommodations</span></li>
                        <li><span>Inclusive Packages</span></li>
                        <li><span>Latest Model Vehicles</span></li>
                        <li><span>Handpicked Hotels</span></li>
                        <li><span>Accesibility managment</span></li>
                    </ul>
                </div>
                <div className={css.name_place}>
                    <div className={css.cards}>
                        <div>
                            <div className={css.city01}>
                                <img className={css.img1} src={city1} alt="" />
                                <div>
                                    <h1>
                                        Hongkong
                                    </h1>
                                </div>
                                <div>
                                    <img src={icon} alt="" />
                                    <p>Asia</p>
                                </div>

                            </div>
                            <div className={css.city02}>
                                <img className={css.img2} src={city3} alt="" />
                                <div>
                                    <h1>Madagascar</h1>
                                    <div>
                                        <img src={icon} alt="" />
                                        <p>Asia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={css.city03}>
                                <img className={css.img3} src={city2} alt="" />
                                <div>
                                    <h1>Ireland</h1>
                                    <div>
                                        <img src={icon} alt="" />
                                        <p>Asia</p>
                                    </div>
                                </div>
                            </div>
                            <div className={css.city04}>
                                <img className={css.img4} src={city4} alt="" />
                                <div>
                                    <h1>Vietnam</h1>
                                    <div>
                                        <img src={icon} alt="" />
                                        <p>Asia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations