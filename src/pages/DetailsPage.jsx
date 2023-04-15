import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tour from '../components/DetailsComponents/Tour/Tour';
import Newsletter from '../components/Newsletter/Newsletter';

function DetailsPage(props) {
    return (
        <div>
           <Header/> 
           <Tour/>
           <Newsletter/>
           <Footer/>            
        </div>
    );
}

export default DetailsPage;