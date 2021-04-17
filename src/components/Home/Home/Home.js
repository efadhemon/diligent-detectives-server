import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <Services></Services>
            <About></About>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;