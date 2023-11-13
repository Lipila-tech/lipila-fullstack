import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/layout/Nav';
import LandingPage from './components/pages/info/LandingPage';
import AboutPage from './components/pages/info/AboutPage';
import ContactPage from './components/pages/info/ContactPage';
import PaymentInfoPage from './components/pages/info/PaymentInfoPage';
import LoanInfoPage from './components/pages/info/LoanInfoPage';
import TermsPage from './components/pages/info/TermsPage';
import LoginForm from './components/auth/Login';
import RegistrationForm from './components/auth/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/paymentinfo" element={<PaymentInfoPage />} />
          <Route path="/loaninfo" element={<LoanInfoPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          {/* <Route path="/logout" element={<RegistrationForm />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
