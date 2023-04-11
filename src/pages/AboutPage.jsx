import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';

function AboutPage(props) {
    return (
        <div>
           <Header/> 
           <Newsletter/>
           <Footer/>
        </div>
    );
}

export default AboutPage;