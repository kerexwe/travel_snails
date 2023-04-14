import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';

function ContactPage(props) {
    return (
        <div>
            <Header/> 
            <Newsletter/>
           <Footer/>           
        </div>
    );
}

export default ContactPage;