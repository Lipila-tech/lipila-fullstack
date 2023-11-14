import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
    // Send RegistrationForm data to your server or perform other actions here
  };

  return (
    <div className="RegistrationForm-form">
      <h1>Sign up</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}
        >
          <Input name="name" type="text" placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please enter your email address',
            },
          ]}
        >
          <Input name="email" type="email" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input name="password" type="password" placeholder="Enter your password" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
            ({ getFieldValue }) => ({
              validator: (_, value) => {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input name="confirm" type="password" placeholder="Confirm your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;