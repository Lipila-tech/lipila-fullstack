import React from 'react';
import "./About.css"

export default function ContactPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name,
            email,
            message,
        };
        // Send data to your server or perform other actions here
    };
    return (
        <div className=''>
            <div className='container p-3'>
                <div className="card px-4">
                    <p className='h8 py-3'>Contact Us</p>
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
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Ex: example@email.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="d-flex flex-column">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows="5"
                                    placeholder="Ex: Example message"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    required
        
                                />
                            </div>
                        </div>
                    </div><br/>
                    <div className='col-12'>
                        <button type="submit" className="btn btn-primary mb-2">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}