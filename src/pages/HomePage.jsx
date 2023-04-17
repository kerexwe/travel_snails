import React from 'react';
import Header from '../components/Header/Header';
import NewTour from '../components/Main/NewTour/NewTour';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import Explore from '../components/Explore/Explore';
import Fastest from '../components/Fastest/Fastest';
import Latest from '../components/Latest/Latest';
import Say from '../components/Say/Say';

function HomePage(props) {
    return (
        <div>
            <Header/>
            <NewTour/>
            <Explore/>
            <Fastest/>
            <Latest/>
            <Say/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default HomePage;