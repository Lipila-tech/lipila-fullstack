import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import axios from 'axios';


const ParentComponent = () => {
  const navigate = useNavigate();

  const [isFormVisible, setIsFormVisible] = useState(true);

  async function handleSubmit(paymentData) {
    // Handle form submission
    // const axios = require('axios');
    let data = JSON.stringify({
      "amount": paymentData.amount,
      "reference_id": "testreference",
      "description": paymentData.description,
      "payer_account": paymentData.senderAccountNumber,
      "payer_name": "",
      "payer_email": "",
      "receiver_account": paymentData.receiverAccountNumber,
      "status": "pending"
    });
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/lipila/api/v1/lipila-payment/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    await axios.request(config)
      .then(promise => {
        console.log(promise.data);
      })
      .catch(e => {
        console.error(e);
      })
    return data;

    // Redirect to the thank you page
    navigate('/about'); // Adjust the path as needed
  };

  return (
    <div className='main'>
      <div className='container p-3'>
        <div className='card px-4'>
          {/* <PaymentButton onClick={() => setIsFormVisible(true)} /> */}
          {isFormVisible && (
            <PaymentForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ParentComponent;