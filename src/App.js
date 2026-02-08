
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";

import Phishing from "./pages/Phishing";

import Assistant from "./pages/Assistant";

import EmailPhishing from "./pages/EmailPhishing";

import PasswordAnalyzer from "./pages/PasswordAnalyzer";



export default function App(){

  return(

    <div className="layout">

      <Sidebar/>

      <div className="content">

        <Routes>

          <Route path="/" element={<Dashboard/>}/>

          <Route path="/phishing" element={<Phishing/>}/>

          <Route path="/assistant" element={<Assistant/>}/>

          <Route path="/email-phishing" element={<EmailPhishing/>}/>
          
          <Route path="/password" element={<PasswordAnalyzer/>}/>

        </Routes>

      </div>

    </div>

  );

}
