import Carousel from "./Carousel";


const Hero = () => {
    return (
        <section className="card text-center">
            <Carousel/>
            <img src="" alt="Lipila logo" />

            <div className="hero-text">
                <h2>Lipila is the easiest way to pay school fees</h2>
                <p>
                    With Lipila, you can pay your child's school fees online with a credit
                    card, mobile money, or bank transfer. It's quick, easy, and secure.
                </p>
                <a href="/signup" className="btn btn-primary">
                    Sign up for free
                </a>
            </div>
        </section>

    )
}

export default Hero;