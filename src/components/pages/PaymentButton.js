import React from 'react';

const PaymentButton = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  return (
    <div className=''>
      <button className="btn btn-primary" onClick={handleFormOpen}>LipilaPay</button>
    </div>
  );
};

export default PaymentButton;
