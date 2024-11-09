import React from 'react'
import Hero from '../components/hero';
import Featured_services from '../components/featured_services';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import SignUpForm from '../components/login';

import ListingsPage from '../components/listingpage'
import LoginForm from '../components/login1';
import Navbar from '../components/navbar';
const Home = () => {
  return (
    <>
            <Navbar />
            <Hero />
            <Featured_services />
            <Testimonial />
            <Footer />
            
            
            
            
            </>
  )
}

export default Home