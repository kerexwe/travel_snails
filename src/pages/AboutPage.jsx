import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Newsletter from '../components/Newsletter/Newsletter';

function AboutPage(props) {
    return (
        <div>
           <Header/> 
           <About/>
           <Newsletter />
           <Footer/>
        </div>
    );
}

export default AboutPage;