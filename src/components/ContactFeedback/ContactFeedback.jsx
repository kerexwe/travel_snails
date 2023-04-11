import React from 'react'
import css from '../../components/ContactFeedback/ContactFeedback.module.scss'
import buy_travel from '../../assets/images/women_travel.svg'

function ContactFeedback() {
  return (
    <div>
        <div className={css.buy_travel}>
                    <div className={css.image}>
                        <img src={buy_travel} alt="" />
                    </div>
                    <div className={css.buy}>
                        <h1>Drop Us A Line</h1>
                        <p>We normally respond within 2 business days</p>
                        <div className={css.input}>
                            <input type="Full name" placeholder='Full name'/>
                            <input type="Email" placeholder='Email'/>
                            <input type="Subject" placeholder='Subject'/>
                            <input className={css.message} type="Message" placeholder='Message'/>
                            <button>Send Message</button>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default ContactFeedback