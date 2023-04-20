import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tour from '../components/DetailsComponents/Tour/Tour';
import Newsletter from '../components/Newsletter/Newsletter';
import ToursCity from '../components/ToursCity/ToursCity';
import CommentTask from '../components/CommentTask/CommentTask';


function DetailsPage(props) {
    return (
        <div>
           <Header/> 
           <ToursCity/>
           <Tour/>
           <CommentTask/>
           <Newsletter/>
           <Footer/>            
        </div>
    );
}

export default DetailsPage;