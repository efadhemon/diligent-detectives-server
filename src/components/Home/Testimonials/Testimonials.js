import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="display-grid-col-3">
                    {
                        reviews.map(review => <Testimonial review={review} key={review._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;