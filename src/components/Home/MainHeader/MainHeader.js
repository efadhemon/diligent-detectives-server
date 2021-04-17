import React from 'react';
import './MainHeader.css'
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';

const MainHeader = () => {
    return (
        <section className="main-header">
            <Navbar></Navbar>
            <TopBanner></TopBanner>
        </section>
    );
};

export default MainHeader;