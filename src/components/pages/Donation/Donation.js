import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState('online');

  const amounts = [15, 25, 45, 100];

  return (
    <div
      className="container-fluid"
      style={{
       
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDaDPwaU06q9BAZ02YhicBD5MzMNJ2eNINg&s')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '50px',
      }}
    >
      {/* Center the headers and set the color */}
      <h1
        className="text-center"
        style={{
          color: 'black', // Set text color to white
          fontWeight: 'bold',
          // Removed background color
          padding: '10px',
          marginTop: "80px",  // Optional: Adds padding around the text for better readability
        }}
      >
        DONATE TO HELP
      </h1>

      <p
        className="text-center"
        style={{
          color: 'white', // Set text color to white
          fontWeight: 'bold',
          fontSize: '20px', // Decreased the font size
        }}
      >
        Make a donation to help us
      </p>

      {/* Donation Amount Section */}
      <h3 style={{ color: 'black', fontWeight: 'bold' }}>Donation Amount</h3>
      <div className='row'>
        <div className="col-md-6 d-flex align-items-center">
          {/* Dollar icon */}
          <div style={{
            backgroundColor: 'blue',
            color: '#fff',
            borderRadius: '10px 0 0 10px',
            padding: '10px 20px',
            fontSize: '24px'
          }}>
           ₹
          </div>

          {/* Input for custom donation amount */}
          <input
            type="text"
            className="form-control"
            value={`₹${selectedAmount}`}
            style={{
              borderRadius: '0 10px 10px 0',
              height: '60px',
              fontSize: '24px'
            }}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        {/* Preset donation amounts */}
        <div className="col-md-6 my-4">
          <div className="d-flex flex-wrap justify-content-between">
            {amounts.map((amount) => (
              <button
                key={amount}
                className="btn mb-2"
                style={{
                  backgroundColor: selectedAmount === amount ? 'blue' : '#fff',
                  color: selectedAmount === amount ? '#fff' : 'blue',
                  border: '1px solid #ddd',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  margin: '5px',
                  flex: '1 0 45%',
                  minWidth: '120px',
                }}
                onClick={() => setSelectedAmount(amount)}
              >
               ₹{amount.toFixed(2)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <h3 style={{ color: 'black', fontWeight: 'bold' }}>Payment Method</h3>
      <div className="d-flex justify-content-start align-items-center">
        <div className="form-check me-4">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="onlinePayment"
            value="online"
            checked={paymentMethod === 'online'}
            onChange={() => setPaymentMethod('online')}
          />
          <label className="form-check-label" htmlFor="onlinePayment" style={{ color: 'black', fontSize: '18px' }}>
            Online Payment
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="offlinePayment"
            value="offline"
            checked={paymentMethod === 'offline'}
            onChange={() => setPaymentMethod('offline')}
          />
          <label className="form-check-label" htmlFor="offlinePayment" style={{ color: 'black', fontSize: '18px' }}>
            Offline Payment
          </label>
        </div>
      </div>
      <h3 style={{ color: 'black', fontWeight: 'bold' }}>Donator Details</h3>
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            style={{ height: '60px', fontSize: '18px', borderRadius: '10px' }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            style={{ height: '60px', fontSize: '18px', borderRadius: '10px' }}
          />
        </div>
       
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            style={{ height: '60px', fontSize: '18px', borderRadius: '10px' }}
          />
        </div>
       
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            style={{ height: '60px', fontSize: '18px', borderRadius: '10px' }}
          />
        </div>
      </div>

      {/* Message Section */}
      <h3 style={{ color: 'black', fontWeight: 'bold' }}>Message</h3>
      <div className="mb-4">
        <textarea
          className="form-control"
          placeholder="Enter Message"
          style={{
            height: '150px',
            fontSize: '18px',
            borderRadius: '10px'
          }}
        ></textarea>
      </div>

      {/* Donator Details Section */}
      

      {/* Submit Button */}
      <div className="text-center">
        <button
          className="btn"
          style={{
            backgroundColor: 'blue',
            color: '#fff',
            padding: '15px 50px',
            fontSize: '18px',
            borderRadius: '50px'
          }}
        >
          DONATE NOW
        </button>
      </div>
    </div>
  );
};

export default Donation;
