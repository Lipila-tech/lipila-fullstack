import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentButton from './PaymentButton';
import PaymentForm from './PaymentForm';


const ParentComponent = () => {
  const navigate = useNavigate();

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (paymentData) => {
    // Handle form submission (e.g., send data to server)
    console.log('query api with data:', paymentData);
    // Redirect to the thank you page
    navigate('/about'); // Adjust the path as needed
  };

  return (
    <div>
      {/* <PaymentButton onClick={() => setIsFormVisible(true)} /> */}
      {isFormVisible && (
        <PaymentForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};
export default ParentComponent;