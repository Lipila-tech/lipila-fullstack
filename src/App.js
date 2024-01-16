import { HashRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Nav from './components/layout/Nav';
import AboutPage from './components/pages/info/AboutPage';
import ContactPage from './components/pages/info/ContactPage';
import PaymentInfoPage from './components/pages/info/PaymentInfoPage';
import ParentComponent from './components/pages/ParentComponent';
import PaymentButton from './components/pages/PaymentButton';
import PersonList from './components/TestAxios';

function App() {
  return (
    <HashRouter base="/">
      {/* <Routes>
        <Route path="/" component={Nav}>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={ParentComponent} />
          <Route path="/lipila" component={PersonList}></Route>
        </Route>
      </Routes> */}
      {/* <Routes>
        <Route path="/" Component={Nav}>
        <Route path="/about" component={AboutPage} />
        </Route>
      </Routes> */}
      <ParentComponent />
      {/* <AboutPage/>
      <ContactPage/>
      <PersonList/> */}
    </HashRouter>
  );
}
export default App;
