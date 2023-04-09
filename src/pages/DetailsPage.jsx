import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tour from '../components/DetailsComponents/Tour/Tour';

function DetailsPage(props) {
    return (
        <div>
           <Header/> 
           <Tour/>
           <Footer/>            
        </div>
    );
}

export default DetailsPage;