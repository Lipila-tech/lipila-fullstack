import Hero from '../../layout/Hero';
import PaymentButton from '../PaymentButton';

const LandingPage = () => {
  return (
    <div className='container'>
      <PaymentButton/>
      {/* <Hero /> */}
      <p>Payment completed</p>
    </div>
  );
};

export default LandingPage;
