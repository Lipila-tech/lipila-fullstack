import React, { useState } from 'react';
import InformationEntryFields from './EntryFields';
import Confirmation from './Confirmation';


const PaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    payerAccountNumber: '',
    receiverAccountNumber: '',
    description: '',
  });


  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission
    onSubmit(formData);      // Call the onSubmit callback from the parent
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onNext = () => {
    console.log(formData)
    setCurrentStep(2);
  };


  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <InformationEntryFields formData={formData} handleChange={handleChange} onNext={onNext}/>
      )}
      {currentStep === 2 && (
        <div>
          <Confirmation paymentData={formData}/>
          <button className='btn btn-primary' type="button" onClick={handleBack}>Back</button>
          <button className='btn btn-primary' type="submit">Submit Payment</button>
        </div>
      )}
    </form>
  );
};
export default PaymentForm;