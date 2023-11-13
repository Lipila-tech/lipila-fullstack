import Testimonials from '../../layout/Testimonials';
import CTA from '../../layout/CTA';
import Footer from '../../layout/Footer';

const LoanInfoPage = () => {
  return (
    <div className='container'>
      <div className="text-center">
        <h1>School Fee Loans</h1>
        <p>Lipila offers school fee loans to parents who need financial assistance.</p>
        <h2>Eligibility</h2>
        <p>To be eligible for a school fee loan, you must:</p>
        <ul>
          <li>Be a registered parent or guardian of a child attending a school partnered with Lipila.</li>
          <li>Have a good credit history.</li>
          <li>Have a steady income.</li>
        </ul>
        <h2>How to Apply</h2>
        <p>To apply for a school fee loan, simply follow these steps:</p>
        <ol>
          <li>Complete the online application form.</li>
          <li>Submit your supporting documents.</li>
          <li>Wait for a decision from our loan officer.</li>
        </ol>
        <h2>Repayment</h2>
        <p>School fee loans must be repaid within a set period of time. You can choose to repay your loan in monthly installments or in one lump sum.</p>
        <h2>Benefits</h2>
        <p>There are many benefits to getting a school fee loan from Lipila:</p>
        <ul>
          <li>You can afford to send your child to school without worrying about the financial burden.</li>
          <li>You can repay your loan at a comfortable pace.</li>
          <li>You can build your credit history.</li>
        </ul>
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LoanInfoPage;
