import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from './components/pages/info/AboutPage';
import ContactPage from './components/pages/info/ContactPage';
import ParentComponent from './components/pages/ParentComponent';
import HomePage from "./components/pages/info/HomePage";
import Layout from "./components/pages/Layout";
import LoginForm from "./components/auth/Login";
import RegistrationForm from "./components/auth/Register";
import Products from "./components/pages/Products";

function App() {
  return (
    // <HashRouter base="/">
    //   {/* <Routes>
    //     <Route path="/" component={Nav}>
    //       <Route path="/about" component={AboutPage} />
    //       <Route path="/contact" component={ContactPage} />
    //       <Route path="/" component={ParentComponent} />
    //       <Route path="/lipila" component={PersonList}></Route>
    //     </Route>
    //   </Routes> */}
    //   {/* <Routes>
    //     <Route path="/" Component={Nav}>
    //     <Route path="/about" component={AboutPage} />
    //     </Route>
    //   </Routes> */}
    //   <ParentComponent />
    //   {/* <AboutPage/>
    //   <ContactPage/>
    //   <PersonList/> */}
    // </HashRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/send-money" element={<ParentComponent/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/products" element={<Products/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
