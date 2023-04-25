import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Highlights from '../components/BlogComponents/Highlights/Highlights';
import TrendingTopics from '../components/TrendingTopics/TrendingTopics';
import BlogStart from '../components/BlogStart/BlogStart';

function BlogPage(props) {
    return (
        <div>
            <Header />
            <BlogStart/>
            <TrendingTopics/>
            <Highlights/>
            <Newsletter/>
            <Footer />
        </div>
    );
}

export default BlogPage;