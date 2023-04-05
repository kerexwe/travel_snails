import React from 'react';
import Header from '../components/Header/Header';
import NewTour from '../components/Main/NewTour/NewTour';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';

function HomePage(props) {
    return (
        <div>
            <Header/>
            <NewTour/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default HomePage;