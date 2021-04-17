import React, { useEffect, useState } from 'react';
import './Services.css';
import { useHistory } from 'react-router';

const Services = () => {

    const history = useHistory();

    const handleService = (service) => {
        history.push(`/user/book`);
        sessionStorage.setItem('service', JSON.stringify(service))
    }

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section id="service" className="service-section">
            <div className="container">
                <h1 className="text-brand text-center mb-5">Our Services</h1>
                <div className="display-grid-col-3">

                    {
                        services.map(service => <div key={service._id} onClick={() => handleService(service)} className="service-box">
                            <div className="service-image">
                                <img className="img-fluid" src={service.image} alt="" />
                            </div>
                            <div className="service-details text-center">
                                <h5>{service.name}</h5>
                                <p>$ {service.cost}</p>
                                <p>{service.description}</p>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;