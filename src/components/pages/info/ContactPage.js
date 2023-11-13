import React from 'react';
import Testimonials from '../../layout/Testimonials';
import CTA from '../../layout/CTA';
import Footer from '../../layout/Footer';


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

        console.log('Contact form submitted:', data);

        // Send data to your server or perform other actions here
    };
    return (
        <div className='container'>
            <section className="card text-center" id="contact">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="5"
                            placeholder="Enter your message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </section>
            <Footer />
        </div>
    )
}