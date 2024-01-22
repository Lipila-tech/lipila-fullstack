import "./Hero.css";


const Hero = () => {
    return (
        <>
            {/* ======= Hero Section ======= */}
            <section
                id="hero"
                className="d-flex justify-content-center align-items-center"
            >
                <div
                    className="container position-relative"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                >
                    <h1>Collect Fees and Send Payments online</h1>
                    <h2>Start sending or Receiving payments instantly</h2>
                    <a href="/login" className="btn-get-started">
                        Get Started
                    </a>
                </div>
            </section>
            {/* End Hero */}
        </>

    )
}

export default Hero;