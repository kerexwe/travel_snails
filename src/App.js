import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import BlogPage from './pages/BlogPage';
import CheckoutPage from './pages/CheckoutPage';
import CompletedPage from './pages/CompletedPage';
import ContactPage from './pages/ContactPage';
import DetailsPage from './pages/DetailsPage';
import ListPage from './pages/ListPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<h1>hello</h1>}/>
    //   <Route path='/test' element={<Test />} />
    // </Routes>
    <Routes>
    <Route path="/" element={
      <HomePage/>
    } />
    <Route path="/list" element={
      <ListPage />
    } />
    <Route path="/details" element={
      <DetailsPage />
    } />
    <Route path="/checkout" element={
      <CheckoutPage />
    } />
    <Route path="/completed" element={
      <CompletedPage />
    } />
    <Route path="/blog" element={
      <BlogPage />
    } />
    <Route path="/blog-details" element={
      <BlogDetailsPage />
    } />
    <Route path="/about" element={
      <AboutPage />
    } />
    <Route path="/contact" element={
      <ContactPage />
    } />
  </Routes>

  );
}

export default App;
