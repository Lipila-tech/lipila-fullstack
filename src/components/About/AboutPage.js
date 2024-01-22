import Counts from './Counts';
import Testimonial from './Testimonial';

function AboutPage() {
    return (
        <>
            <h3>About Us</h3>
            <section id="about" className="about">
                <FeatureCard />
                <OurStory />
            </section>
        </>
    );
}
function FeatureCard({ icon, title, desc }) {
    return (
        <>
            <div className='container'>
                <h4>Who We Serve</h4>
                <h6>Lipila is more than just a payment platform; it's a powerful tool that empowers diverse sectors
                    to manage their finances with ease and efficiency. Whether you're a school collecting fees, a
                    transport company managing fares, a grocery store facilitating deliveries, or an employer
                    disbursing salaries, Lipila has the solutions to simplify your financial workflows and unlock
                    valuable data insights.</h6>

            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Schools</h4>
                            <p className="card-text">
                                Collect fees effortlessly through online portals or mobile wallets.
                                Track payments in real-time and generate personalized reports.
                                Manage scholarships and grants seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Transport Companies</h4>
                            <p className="card-text">
                                Simplify ticketing and fare collection across various modes of transport.
                                Offer flexible payment options like mobile money or cards.
                                Track passenger movement and optimize routes based on demand.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Grocery Stores</h4>
                            <p className="card-text">
                                Facilitate online and in-store payments with secure cashless options.
                                Manage delivery payments and track orders efficiently.
                                Gain valuable customer insights through transaction data.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Employers</h4>
                            <p className="card-text">
                                Disburse salaries securely and on time through direct deposits or mobile wallets.
                                Manage payroll deductions and taxes effortlessly.
                                Track employee attendance and payroll data for better HR management.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function OurStory() {
    return (
        <div>
            <h4>Our Story</h4>
        </div>
    )
}

export default AboutPage;
