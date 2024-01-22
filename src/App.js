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
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";


function App() {
  const [token, setToken] = React.useState();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/send-money" element={<ParentComponent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
