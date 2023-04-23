import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import MarketingCourse from '../components/MarketingCourse/MarketingCourse';
import MarketingMain from '../components/MarketingMain/MarketingMain';

function BlogDetailsPage(props) {
    return (
        <div>
            <Header/>
            <MarketingCourse/>
            <MarketingMain/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default BlogDetailsPage;