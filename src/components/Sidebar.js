
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaRobot, FaEnvelope, FaKey } from "react-icons/fa";

export default function Sidebar(){

  return(
    <div className="sidebar">

      <h2>CyberGuard AI</h2>

      <Link to="/"><FaShieldAlt/> Dashboard</Link>

      <Link to="/phishing"><FaLock/> Phishing</Link>

      <Link to="/email-phishing"><FaEnvelope/> Email Phishing Detection</Link>
      
      <Link to="/password"><FaKey/> Password Analyzer</Link>

      <Link to="/assistant"><FaRobot/> Assistant</Link>

    </div>
  );

}
