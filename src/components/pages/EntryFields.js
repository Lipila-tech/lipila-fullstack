import React from 'react';

const InformationEntryFields = ({ formData, handleChange, onNext }) => {
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <h6>Send Money in 3 easy Steps</h6>
                    <div className='form-group'>
                        <label className='sr-only' htmlFor="amount">Amount:</label>
                        <input
                            className='form-control'
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='sr-only' htmlFor="payerAccountNumber">Payer Account Number:</label>
                        <input
                            className='form-control'
                            type="text"
                            id="payerAccountNumber"
                            name="payerAccountNumber"
                            value={formData.payerAccountNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='sr-only' htmlFor="receiverAccountNumber">Receiver Account Number:</label>
                        <input
                            className='form-control'
                            type="text"
                            id="receiverAccountNumber"
                            name="receiverAccountNumber"
                            value={formData.receiverAccountNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='sr-only' htmlFor="description">Description:</label>
                        <input
                            className='form-control'
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={onNext}>Next</button>

                </div>
            </div>
        </div>
    );
};

export default InformationEntryFields;
