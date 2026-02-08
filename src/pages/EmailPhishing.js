import React, { useState } from "react";
import { analyzeThreat } from "../ai/threatEngine";
import TamboRenderer from "../tambo/TamboRenderer";

export default function EmailPhishing(){

  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState(null);

  function analyzeEmail(){

    const res = analyzeThreat(emailText);

    setResult(res);

  }

  return(

    <div>

      <h1>Email Phishing Detection</h1>

      <textarea
        placeholder="Paste email content here..."
        value={emailText}
        onChange={(e)=>setEmailText(e.target.value)}
      />

      <button onClick={analyzeEmail}>
        Analyze Email
      </button>

      {result && <TamboRenderer result={result}/>}

    </div>

  );

}
