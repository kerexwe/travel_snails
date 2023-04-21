import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tour from '../components/DetailsComponents/Tour/Tour';
import Newsletter from '../components/Newsletter/Newsletter';
import ToursCity from '../components/ToursCity/ToursCity';
import Like from '../components/YouMightLike/Like';


function DetailsPage(props) {
    return (
        <div>
           <Header/> 
           <ToursCity/>
           <Tour/>
           <Like/>
           <Newsletter/>
           <Footer/>            
        </div>
    );
}

export default DetailsPage;