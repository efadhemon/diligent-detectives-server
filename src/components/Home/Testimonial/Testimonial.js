import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,image} = props.review;
    return (
        <div className="border p-4 rounded">
            <div className="d-flex  align-items-center">
                <img className="rounded-circle" src={image} alt="" width="80" height="80"/>
                <div className="ml-4">
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="text-secondary mt-3">
                <p className="text-justify">{quote}</p>
            </div>
       </div>
    );
};

export default Testimonial;