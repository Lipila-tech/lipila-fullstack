import CTA from '../../layout/CTA';
import Footer from '../../layout/Footer';


const PaymentInfoPage = () => {
    return (
        <div className='container'>
            <div className="text-center">
                <h1>How to Make Payments</h1>
                <p>Making payments to Lipila is easy and secure. You can pay online using a credit card, mobile money, or bank transfer.</p>
                <h2>Online Payments</h2>
                <p>To make an online payment, simply follow these steps:</p>
                <ol className=''>
                    <li>Log in to your Lipila account.</li>
                    <li>Click on the "Payments" tab.</li>
                    <li>Select the payment method you want to use.</li>
                    <li>Enter the payment details and click on "Pay".</li>
                </ol>
                <h2>Mobile Money Payments</h2>
                <p>To make a mobile money payment, simply follow these steps:</p>
                <ol>
                    <li>Dial the mobile money number for your country.</li>
                    <li>Select the "Pay Bills" option.</li>
                    <li>Select "Lipila" from the list of billers.</li>
                    <li>Enter your Lipila account number and the amount you want to pay.</li>
                    <li>Enter your mobile money PIN and confirm the payment.</li>
                </ol>
                <h2>Bank Transfer Payments</h2>
                <p>To make a bank transfer payment, simply follow these steps:</p>
                <ol>
                    <li>Log in to your online banking account.</li>
                    <li>Navigate to the "Payments" section.</li>
                    <li>Select "Bank Transfer" as the payment method.</li>
                    <li>Enter the Lipila bank account details.</li>
                    <li>Enter your Lipila account number and the amount you want to pay.</li>
                    <li>Review the payment details and click on "Pay".</li>
                </ol>
            </div>
            <CTA />
            <Footer />
        </div>
    );
};

export default PaymentInfoPage;
