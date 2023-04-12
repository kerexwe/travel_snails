import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ContactComponents from '../components/ContactComponents/ContactComponents';
import Newsletter from '../components/Newsletter/Newsletter';

function ContactPage(props) {
    return (
        <div>
            <Header/> 
            <ContactComponents/>
            <Newsletter />
           <Footer/>           
        </div>
    );
}

export default ContactPage;