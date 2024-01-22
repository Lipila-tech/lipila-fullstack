import Counts from './Counts';
import Testimonial from './Testimonial';

function AboutPage() {
    return (
        <>
            {/* ======= Breadcrumbs ======= */}
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Lipila: Empowering Payment Simplicity</h2>
                    <p>
                        Making financial management smooth and accessible for individuals and businesses in Zambia.
                    </p>
                </div>
            </div>
            {/* End Breadcrumbs */}
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {/* <div
                            className="col-lg-6 order-1 order-lg-2"
                            data-aos="fade-left"
                            data-aos-delay={100}
                        >
                            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                        </div> */}
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>
                                Collections
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate trideta storacalaperda mastiro dolore
                                    eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate
                            </p>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>
                                Disbursements
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate trideta storacalaperda mastiro dolore
                                    eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}
        </>
    );
}

export default AboutPage;
