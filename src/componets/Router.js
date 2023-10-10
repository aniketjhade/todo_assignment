// Router.js
import React, {useState}from "react";
import {Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import DashBoard from "./DashBoard";
import RegistrationForm from "./RegistrationForm";

function AppRouter() {
  return (
      <Routes>
      <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
  );
}

export default AppRouter;
