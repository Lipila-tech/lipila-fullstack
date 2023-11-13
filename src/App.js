import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/layout/Nav';
import LandingPage from './components/pages/info/LandingPage';
import AboutPage from './components/pages/info/AboutPage';
import ContactPage from './components/pages/info/ContactPage';
import PaymentInfoPage from './components/pages/info/PaymentInfoPage';
import LoanInfoPage from './components/pages/info/LoanInfoPage';
import TermsPage from './components/pages/info/TermsPage';

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
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
