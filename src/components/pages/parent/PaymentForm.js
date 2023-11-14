import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import NavAuth from '../../layout/NavAuth';


const PaymentForm = () => {

    const students = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Jane Doe',
        },
        {
            id: 3,
            name: 'Peter Jones',
        },
    ];

    const [term, setTerm] = React.useState('Term 1');
    const [selectedStudents, setSelectedStudents] = React.useState([]);
    const [amountOption, setAmountOption] = React.useState('Full Payment');
    const [amount, setAmount] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('Mobile Money');

    const handleTermChange = (value) => {
        setTerm(value);
    };

    const handleStudentChange = (selectedOptions) => {
        setSelectedStudents(selectedOptions);
    };

    const handleAmountOptionChange = (value) => {
        setAmountOption(value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const paymentData = {
            term,
            selectedStudents,
            amountOption,
            amount,
            paymentMethod,
        };

        console.log('Payment data:', paymentData);

        // Send payment data to your server or perform other actions here
    };

    const calculateTotalAmount = () => {
        if (amountOption === 'Full Payment') {
            // Calculate full payment amount based on selected students and term
            return 1000; // Replace with actual calculation
        } else {
            // Calculate 50% payment amount based on selected students and term
            return 500; // Replace with actual calculation
        }
    };

    return (
        <>
            <NavAuth />
            <div className="payment-form">
                <h1>Make Payment</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Item label="Term">
                        <Select value={term} onChange={handleTermChange}>
                            <Select.Option value="Term 1">Term 1</Select.Option>
                            <Select.Option value="Term 2">Term 2</Select.Option>
                            <Select.Option value="Term 3">Term 3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Select Students">
                        <Select
                            mode="multiple"
                            placeholder="Select students to pay for"
                            value={selectedStudents}
                            onChange={handleStudentChange}
                        >
                            {students.map((student) => (
                                <Select.Option key={student.id} value={student.id}>{student.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Payment Amount Option">
                        <Select value={amountOption} onChange={handleAmountOptionChange}>
                            <Select.Option value="Full Payment">Full Payment</Select.Option>
                            <Select.Option value="50% Payment">50% Payment</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Confirm Payment Amount">
                        <Input
                            type="number"
                            placeholder="Enter payment amount"
                            value={amount}
                            onChange={handleAmountChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item label="Payment Method">
                        <Select value={paymentMethod} onChange={handlePaymentMethodChange}>
                            <Select.Option value="Mobile Money">Mobile Money</Select.Option>
                            <Select.Option value="Credit Card">Credit Card</Select.Option>
                            <Select.Option value="Bank Transfer">Bank Transfer</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Make Payment</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default PaymentForm;
