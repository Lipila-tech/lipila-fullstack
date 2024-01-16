import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav';
import LandingPage from './components/pages/info/LandingPage';
import AboutPage from './components/pages/info/AboutPage';
import ContactPage from './components/pages/info/ContactPage';
import PaymentInfoPage from './components/pages/info/PaymentInfoPage';
import ParentComponent from './components/pages/ParentComponent';
import PaymentButton from './components/pages/PaymentButton';
import Popup from './components/pages/PopUpComponent';
import PersonList from './components/TestAxios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<ParentComponent />} />
          <Route path="/lipila" element={<PersonList/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
