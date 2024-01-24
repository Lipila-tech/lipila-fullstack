import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage";
import Login from "./components/Auth/Login";
import RegistrationForm from "./components/Auth/Register";

import AboutPage from "./components/About/AboutPage"
import ContactPage from './components/About/ContactPage';

import ParentComponent from './components/Payment/ParentComponent';
import Products from "./components/Products/Products";
import useToken from "./components/App/useToken";
import PageNotFound from "./components/Error/PageNotFound";
// Dashboard
import ParentAdmin from "./components/Admin/ParentAdmin";
import UserProfile from "./components/Admin/pages/UserProfile";
import FAQ from "./components/Admin/pages/PagesFAQ";
import Contact from "./components/Admin/pages/Contact";
import AccountActivity from "./components/Admin/pages/AccountActivity";

function App() {
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/send-money" element={<ParentComponent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/dashboard" element={<ParentAdmin />} />
        <Route path="/users-profile" element={<UserProfile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin-contact" element={<Contact />} />
        <Route path="/account-activity" element={<AccountActivity />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
