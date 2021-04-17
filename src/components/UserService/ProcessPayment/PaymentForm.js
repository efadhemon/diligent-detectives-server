
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null)
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
      </button>
      </form>

      {
        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ color: 'green' }}>Thank you, Your Payment is Success.</p>
      }

    </div>
  );
};

export default PaymentForm;