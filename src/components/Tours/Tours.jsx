import React from 'react'
import css from './Tours.module.scss'
import img from '../../assets/images/strelka.svg'
import card1 from '../../assets/ToursCard/card1.svg'
import card2 from '../../assets/ToursCard/card2.svg'
import card3 from '../../assets/ToursCard/card3.svg'
import card4 from '../../assets/ToursCard/card4.svg'
import card5 from '../../assets/ToursCard/card5.svg'
import card6 from '../../assets/ToursCard/card6.svg'
import card7 from '../../assets/ToursCard/card7.svg'
import card8 from '../../assets/ToursCard/card8.svg'

function Tours() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <div className={css.top_lef}>
                        <h1>Tours By City</h1>
                        <p>Our Featured Tours can help you find the trip that's perfect for you!</p>
                    </div>
                    <div className={css.top_rig}>
                        <h1>View All </h1>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className={css.bottom}>
                    <div className={css.bott_top}>
                        <div className={css.box}>
                            <div>
                                <img src={card1} alt="" />
                            </div>
                            <div>
                                <h1>Qatar</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                        <div className={css.box}>
                            <div>
                                <img src={card2} alt="" />
                            </div>
                            <div>
                                <h1>Barbados</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                        <div className={css.box3}>
                            <div>
                                <img src={card3} alt="" />
                            </div>
                            <div>
                                <h1>Hungary</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                        <div className={css.box}>
                            <div>
                                <img src={card4} alt="" />
                            </div>
                            <div>
                                <h1>Netherlands</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                    </div>

                    <div className={css.bott_bott}>
                        <div className={css.box}>
                            <div>
                                <img src={card5} alt="" />
                            </div>
                            <div>
                                <h1>Uganda</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                        <div className={css.box}>
                            <div>
                                <img src={card6} alt="" />
                            </div>
                            <div>
                                <h1>Eritrea</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                        <div className={css.box}>
                            <div>
                                <img src={card7} alt="" />
                            </div>
                            <div>
                                <h1>Gambia</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                        <div className={css.box}>
                            <div>
                                <img src={card8} alt="" />
                            </div>
                            <div>
                                <h1>Lebanon</h1>
                                <p>196 Place</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.all}>
                        <h1>View All </h1>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tours