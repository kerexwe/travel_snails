import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Newsletter from '../components/Newsletter/Newsletter';
import OurClients from '../components/OurClients/OurClients';

function AboutPage(props) {
    return (
        <div>
           <Header/> 
           <About/>
           <OurClients/>
           <Newsletter />
           <Footer/>
        </div>
    );
}

export default AboutPage;