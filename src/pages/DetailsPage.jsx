import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tour from '../components/DetailsComponents/Tour/Tour';
import Newsletter from '../components/Newsletter/Newsletter';
import Overviews from '../components/DetailsComponents/Overviews/Overviews'

function DetailsPage(props) {
    return (
        <div>
           <Header/> 
           <Tour/>
           <Overviews/>
           <Newsletter/>
           <Footer/>            
        </div>
    );
}

export default DetailsPage;