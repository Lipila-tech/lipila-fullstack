import Carousel from "./Carousel";
import PaymentButton from "../pages/PaymentButton";
import PaymentForm from "../pages/PaymentForm";

const Hero = () => {
    return (
        <section className="text-center">
            <PaymentButton/>
            <Carousel/>
        </section>

    )
}

export default Hero;