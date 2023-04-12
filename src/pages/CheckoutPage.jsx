import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Pay from '../components/CheckoutComponents/Pay/Pay';

function CheckoutPage(props) {
    return (
        <div>
           <Header/> 
           <Pay/>
           <Footer/>           
        </div>
    );
}

export default CheckoutPage;