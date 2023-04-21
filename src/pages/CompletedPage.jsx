import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Completed from '../components/CompletedComponents/Completed/Completed';

function CompletedPage(props) {
    return (
        <div>
            <Header/> 
            <Completed/>
           <Footer/>           
        </div>
    );
}

export default CompletedPage;