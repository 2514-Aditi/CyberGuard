import React, { useState } from "react";

export default function PasswordAnalyzer(){

  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  function checkStrength(){

    if(password.length < 6){
      setStrength("Weak ❌");
    }
    else if(password.length < 10){
      setStrength("Medium ⚠️");
    }
    else{
      setStrength("Strong ✅");
    }

  }

  return(

    <div>

      <h1>Password Strength Analyzer</h1>

      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={checkStrength}>
        Check Strength
      </button>

      {strength && (

        <div className="card">

          Strength: {strength}

        </div>

      )}

    </div>

  );

}
