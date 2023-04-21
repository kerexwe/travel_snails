import React from 'react';
import Header from '../components/Header/Header';
import NewTour from '../components/Main/NewTour/NewTour';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import Explore from '../components/Explore/Explore';
import Fastest from '../components/Fastest/Fastest';
import Latest from '../components/Latest/Latest';
import Say from '../components/Say/Say';
import Featured from '../components/Main/FeaturedTours/Featured';

function HomePage(props) {
    return (
        <div>
            <Header/>
            <NewTour/>
            <Explore/>
            <Fastest/>
            <Featured/>
            <Latest/>
            <Say/>
            {/* <Newsletter/>
            <Footer/> */}
        </div>
    );
}

export default HomePage;