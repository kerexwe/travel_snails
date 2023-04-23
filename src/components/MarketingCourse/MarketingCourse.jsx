import React from 'react'
import css from './MarketingCourse.module.scss'
import icon_insta from '../../assets/images/icon_instagram.svg'
import icon_facebook from '../../assets/images/icon_facebook.svg'
import icon_in from '../../assets/images/icon-in.svg'
import icon_twitter from '../../assets/images/icon_twiter.svg'
import icon_arrow from '../../assets/images/market_vector.svg'

function MarketingCourse() {
    return (
        <div className={css.content}>
            <div className={css.wrapper}>
                <div className={css.text}>
                    <p>8 minute read</p>
                    <div>
                        <h1>The Complete Digital Marketing Course - 12 Courses In 1</h1>
                    </div>
                    <p className={css.time}>16 Mar 2020 12:35 PM</p>
                    <div className={css.icon}>
                        <div>
                            <img src={icon_facebook} alt="" />
                        </div>
                        <div>
                            <img src={icon_insta} alt="" />
                        </div>
                        <div>
                            <img src={icon_in} alt="" />
                        </div>
                        <div>
                            <img src={icon_twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.nav}>
                <div className={css.nav_text}>
                    <h1>Home</h1>
                    <img src={icon_arrow} alt="" />
                </div>
                <div className={css.nav_text}>
                    <h1>Blog</h1>
                    <img src={icon_arrow} alt="" />
                </div>
                <p>The Complete Digital Marketing Course - 12 Courses in 1</p>
            </div>
            <hr />
        </div>
    )
}

export default MarketingCourse