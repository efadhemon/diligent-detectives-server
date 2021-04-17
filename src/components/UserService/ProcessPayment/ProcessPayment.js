import React from 'react';
import './ProcessPayment.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitPaymentForm from './SplitPaymentForm';

const stripePromise = loadStripe('pk_test_51IeJE0IsfsTcktY31y20NhVIwFnIwkn8HExfoKAWUHJUIsId8Sk4krWuK1GdqvERbz1OFcOa1dqUBembkhvFtNkS00QSZccI7h');

const ProcessPayment = ({serviceCost,handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitPaymentForm serviceCost={serviceCost} handlePayment={handlePayment}></SplitPaymentForm>
        </Elements>
    );
};

export default ProcessPayment;