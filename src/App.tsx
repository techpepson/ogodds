import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "@radix-ui/themes/styles.css";
import About from "./components/About";
import Premium from "./components/Premium";
import Contact from "./components/Contact";
import AdminLogin from "./components/auth/AdminLogin";
import AdminEdit from "./components/auth/AdminEdit";
import AdminPage from "./components/auth/AdminPage";
import Navbar from "./components/utils/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/utils/Footer";

const App: React.FC = () => {
  // check if user is logged in
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vip" element={<Premium />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlog" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminEdit" element={<AdminEdit />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
