import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ContactComponents from '../components/ContactComponents/ContactComponents';

function ContactPage(props) {
    return (
        <div>
            <Header/> 
            <ContactComponents/>
           <Footer/>           
        </div>
    );
}

export default ContactPage;