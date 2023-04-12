import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

function AboutPage(props) {
    return (
        <div>
           <Header/> 
           <About/>
           <Footer/>
        </div>
    );
}

export default AboutPage;