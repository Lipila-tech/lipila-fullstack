import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      password2
    };
    // Send data to your server or perform other actions here
  };

  return (
    <div className="container p-3">
      <div className='card px-4'>
        <p className='h8 py-3'>Create an Account</p>
        <div className='row gx-3'>
          <div className='col-12'>
            <div className="d-flex flex-column">
              <label htmlFor="name" className='form-label'>Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ex: John Doe"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
          </div>
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
              <label htmlFor="password">Password</label>
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
          <div className='col-12'>
            <div className="d-flex flex-column">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type='password'
                className="form-control"
                id="password2"
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
            <button type="submit" className="btn btn-primary mb-2">Register</button>
          </div>
        </div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;