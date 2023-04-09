import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Locations from '../components/ListComponents/Locations/Locations'

function ListPage(props) {
    return (
        <div>
            <Header />
            <Locations/>
            <Footer />
        </div>
    );
}

export default ListPage;