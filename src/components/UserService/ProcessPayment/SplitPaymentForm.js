import React, { useMemo, useState } from "react";
import {
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./useResponsiveFontSize";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitPaymentForm = ({ serviceCost, handlePayment }) => {

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();


  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
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
    <div className="width-50">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Card number
        <CardNumberElement
            options={options}
          />
        </label>
        <div className="row">
          <label className="label col-6">
            Expiration date
            <CardExpiryElement
              options={options}
            />
          </label>
          <label className="label col-6">
            CVC
            <CardCvcElement
              options={options}
            />
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className='margin-0 '>Your Service Charged Will Be ${serviceCost}</h5>
        <button className="btn-brand pay-btn" type="submit">Pay</button>
        </div>
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

export default SplitPaymentForm;
