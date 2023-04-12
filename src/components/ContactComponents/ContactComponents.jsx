import React from 'react'
import css from './ContactComponents.module.scss'
import ContactCards from '../ContactCards/ContactCards'
import ContactFeedback from '../ContactFeedback/ContactFeedback'

function ContactComponents() {
    return (
        <div className='container'>
            <div className={css.worldwide}>
                <h1>We Work <br /> Worldwide.</h1>
                <p>We'd love to talk about how we can help you.</p>
            </div>
                
            <div>
                <ContactCards />
            </div>
            
            <ContactFeedback />
        </div>
    )
}

export default ContactComponents