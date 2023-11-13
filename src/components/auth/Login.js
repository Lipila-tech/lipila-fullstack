import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Submitted values:', values);
        // Send LoginForm credentials to your server or perform other actions here
    };

    return (
        <div className="container-fluid">
            <h1 className='text-center'>Login</h1>
            <div className='card'>
                <Form onFinish={onFinish}>
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Link to="/registration">Register</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;
