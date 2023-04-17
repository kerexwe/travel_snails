import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tour from '../components/DetailsComponents/Tour/Tour';
import Newsletter from '../components/Newsletter/Newsletter';
import Overviews from '../components/DetailsComponents/Overviews/Overviews'
import ToursCity from '../components/ToursCity/ToursCity';

function DetailsPage(props) {
    return (
        <div>
           <Header/> 
           <ToursCity/>
           <Tour/>
           <Overviews/>
           <Newsletter/>
           <Footer/>            
        </div>
    );
}

export default DetailsPage;