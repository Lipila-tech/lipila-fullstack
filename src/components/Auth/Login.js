import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email,
            password,
        };
        // Send data to your server or perform other actions here
    };

    return (
        <div className="container p-3">
            <div className='card px-4'>
                <p className='h8 py-3'>Login</p>
                <div className='row gx-3'>
                    <div className='col-12'>
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Ex: example@email.com"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex flex-column">
                            <label htmlFor="passwor">Password</label>
                            <input
                                type='password'
                                className="form-control"
                                id="password"
                                rows="5"
                                placeholder="************"
                                s onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div><br />
                <div>
                    <div className='col-12'>
                        <button type="submit" className="btn btn-primary mb-2">Login</button>
                    </div>
                </div>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default LoginForm;
