import React from 'react'
import css from '../../components/ContactCards/ContactCards.module.scss'
import contact_img1 from '../../assets/images/contact_img1.svg'
import contact_img2 from '../../assets/images/contact_img2.svg'
import contact_img3 from '../../assets/images/contact_img3.svg'
import icon_email from '../../assets/images/icon_email.svg'
import icon_phone from '../../assets/images/icon_phone.svg'
import icon_map from '../../assets/images/icon_maap.svg'
import icon_link from '../../assets/images/icon_link.svg'

function ContactCards() {
    return (
        <div className={css.wrapper}>

            <div className={css.cards}>
                <div>
                    <img className={css.img} src={contact_img1} alt="" />
                </div>

                <div className={css.nav_card}>
                    <div>
                        <h1>Jordan</h1>
                    </div>
                    <div className={css.address}>
                        <img src={icon_map} alt="" />
                        <h1>Address</h1>
                        <img src={icon_link} alt="" />
                    </div>
                    <p>3891 Ranchview Dr. Richardson, California 62639</p>
                    <div className={css.phone}>
                        <img src={icon_phone} alt="" />
                        <h1>Phone</h1>

                    </div>
                    <p>(201) 555-0124</p>
                    <div className={css.email}>
                        <img src={icon_email} alt="" />
                        <h1>Email</h1>

                    </div>
                    <p>jessica.hanson@example.com</p>
                </div>

            </div>

            <div className={css.cards}>
                <div>
                    <img className={css.img} src={contact_img2} alt="" />
                </div>

                <div className={css.nav_card}>
                    <div>
                        <h1>Canada</h1>
                    </div>
                    <div className={css.address}>
                        <img src={icon_map} alt="" />
                        <h1>Address</h1>
                        <img src={icon_link} alt="" />
                    </div>
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    <div className={css.phone}>
                        <img src={icon_phone} alt="" />
                        <h1>Phone</h1>

                    </div>
                    <p>(603) 555-0123</p>
                    <div className={css.email}>
                        <img src={icon_email} alt="" />
                        <h1>Email</h1>

                    </div>
                    <p>michelle.rivera@example.com</p>
                </div>

            </div>

            <div className={css.cards}>
                <div>
                    <img className={css.img} src={contact_img3} alt="" />
                </div>

                <div className={css.nav_card}>
                    <div>
                        <h1>Portugal</h1>
                    </div>
                    <div className={css.address}>
                        <img src={icon_map} alt="" />
                        <h1>Address</h1>
                        <img src={icon_link} alt="" />
                    </div>
                    <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    <div className={css.phone}>
                        <img src={icon_phone} alt="" />
                        <h1>Phone</h1>

                    </div>
                    <p>(217) 555-0113</p>
                    <div className={css.email}>
                        <img src={icon_email} alt="" />
                        <h1>Email</h1>

                    </div>
                    <p>curtis.weaver@example.com</p>
                </div>

            </div>


        </div>
    )
}

export default ContactCards