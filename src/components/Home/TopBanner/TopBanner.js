import React from 'react';
import './TopBanner.css'
import bannerImage from '../../../images/bannerImage.jpg'

const TopBanner = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-7 mb-4">
                    <h1 className="gradient-text">Diligent Detectives <br /> For Yours</h1>
                    <p className="w-75">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi ullam tempora voluptates molestiae similique possimus aliquam eius necessitatibus veritatis.</p>
                    <a href="#service" className="btn-brand">Get Your Service</a>
                </div>
                <div className="col-md-5">
                    <div className="banner-image">
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;