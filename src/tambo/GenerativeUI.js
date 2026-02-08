import React from "react";
import Phishing from "../pages/Phishing";
import EmailPhishing from "../pages/EmailPhishing";
import PasswordAnalyzer from "../pages/PasswordAnalyzer";
import Assistant from "../pages/Assistant";

export default function GenerativeUI({command}){

  if(!command) return null;

  const text = command.toLowerCase();

  if(text.includes("url") || text.includes("phishing")){
    return <Phishing/>;
  }

  if(text.includes("email")){
    return <EmailPhishing/>;
  }

  if(text.includes("password")){
    return <PasswordAnalyzer/>;
  }

  if(text.includes("assistant") || text.includes("help")){
    return <Assistant/>;
  }

  return (
    <div className="card">
      No matching component found.
    </div>
  );

}
