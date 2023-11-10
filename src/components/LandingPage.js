import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Nav from './Nav';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      {/* <Header /> */}
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
