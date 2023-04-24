import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Newsletter from '../components/Newsletter/Newsletter';
import OurClients from '../components/OurClients/OurClients';
import OurTeam from '../components/OurTeam/OurTeam';
import Say from '../components/Say/Say'

function AboutPage(props) {
    return (
        <div>
           <Header/> 
           <About/>
           <Say/>
           <OurTeam/>
           <OurClients/>
           <Newsletter />
           <Footer/>
        </div>
    );
}

export default AboutPage;