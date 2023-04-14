import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Locations from '../components/ListComponents/Locations/Locations'
import Newsletter from '../components/Newsletter/Newsletter';

function ListPage(props) {
    return (
        <div>
            <Header />
            <Locations/>
            <Newsletter/>
            <Footer />
        </div>
    );
}

export default ListPage;