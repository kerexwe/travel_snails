import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Highlights from '../components/BlogComponents/Highlights/Highlights';

function BlogPage(props) {
    return (
        <div>
            <Header />
            <Highlights/>
            <Newsletter/>
            <Footer />
        </div>
    );
}

export default BlogPage;