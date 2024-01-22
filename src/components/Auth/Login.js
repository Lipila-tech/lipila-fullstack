import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


const Login = ({ setToken }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
    }

    return (
        <div className="container p-3">
            <div className='card px-4'>
                <p className='h8 py-3'>Login</p>
                <div className='row gx-3'>
                    <form onSubmit={handleSubmit}>
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
                        <div>
                            <div className='col-12'>
                                <button type="submit" className="btn btn-primary mb-2">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <a href="/register">Register</a>
            </div>
        </div >
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
