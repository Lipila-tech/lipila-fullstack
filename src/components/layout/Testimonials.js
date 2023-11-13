import React from 'react';

const Testimonials = () => {
    return (
        <section className="card">
            <h2 className='card-header text-center'>Testimonials</h2>
            <div className="card">
                <div className="card-body">
                    <blockquote>
                        Lipila has made it so much easier for me to pay my child's school fees. I can now pay online with my credit card, and it's done in minutes. I highly recommend Lipila to all parents.
                    </blockquote>
                    <p className="card-text">
                        <strong>- John Doe, Parent</strong>
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <blockquote>
                        Lipila has been a lifesaver for me. I used to have to drive to the bank to pay my child's school fees, which was a huge hassle. Now, I can pay online with my mobile money, and it's so much easier.
                    </blockquote>
                    <p className="card-text">
                        <strong>- Jane Doe, Parent</strong>
                    </p>
                </div>
            </div>

        </section >
    );
};

export default Testimonials;
