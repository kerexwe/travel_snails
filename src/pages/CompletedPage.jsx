import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Completed from '../components/CompletedComponents/Completed/Completed';

function CompletedPage(props) {
    return (
        <div>
            <Header/> 
            <Completed/>
            <Newsletter/>
           <Footer/>           
        </div>
    );
}

export default CompletedPage;