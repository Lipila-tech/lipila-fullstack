import Header from '../../layout/Header';

import Hero from '../../layout/Hero';
import Features from '../../layout/Features';
import Testimonials from '../../layout/Testimonials';
import CTA from '../../layout/CTA';
import Footer from '../../layout/Footer';

const LandingPage = () => {
  return (
    <div className='container'>
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
