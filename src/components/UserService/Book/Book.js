import React from 'react';
import './Book.css'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {

  const serviceInfo = JSON.parse(sessionStorage.getItem('service')) || { status: null }
  const clientInfo = JSON.parse(sessionStorage.getItem('loggedInUser')) || {}

  const history = useHistory();

  const handlePaymentSuccess = paymentId => {
    console.log(paymentId);
    const bookingDetails = { client_name: clientInfo.name, client_email: clientInfo.email, serviceInfo: { ...serviceInfo }, paymentId, status: 'Pending', bookingTime: new Date() }
    fetch('http://localhost:4000/addBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Thanks, Your Booking is Successful');
          sessionStorage.removeItem('service');
          history.push('/user/booking-list')
        }
      })
  }

  return (
    <section className="book-section">
      <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
        <h1>Book</h1>
        <p className="text-center"><span>Design By</span> <br/> <span> Developer Emon</span></p>
      </div>
      <div className="bg-light padding-5">
        <div style={{ display: serviceInfo.status === null ? 'none' : 'block' }}>

          <div className="booking-info width-50">
            <input className="input" readOnly defaultValue={clientInfo.name} />
            <input className="input" readOnly defaultValue={clientInfo.email} />
            <input className="input" readOnly defaultValue={serviceInfo.name} />
          </div>

          <div className="payment-info">
            <div className="pay-with mb-4">
              <p className="text-secondary">Pay With</p>
              <label htmlFor="credit-card">
                <input type="radio" id="credit-card" name="paymentMethod" defaultChecked={true} /> Credit Card
              </label>
              <label htmlFor="paypal">
                <input type="radio" id="paypal" name="paymentMethod" /> Paypal
              </label>
            </div>
            <ProcessPayment serviceCost={serviceInfo.cost} handlePayment={handlePaymentSuccess}></ProcessPayment>
          </div>
        </div>

        <div style={{ display: serviceInfo.status === null ? 'block' : 'none' }} className="text-center">
          <h3>Go to Home page and select a service</h3>
          <Link to='/'>Click here</Link>
        </div>
      </div>

    </section>
  );
};

export default Book;