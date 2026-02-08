import React, { useState } from "react";
import GenerativeUI from "../tambo/GenerativeUI";

export default function Dashboard(){

  const [command, setCommand] = useState("");
  const [activeCommand, setActiveCommand] = useState("");

  function handleCommand(){
    setActiveCommand(command);
  }

  return(

    <div className="dashboard-container">

      <div className="dashboard-content">

        <h1>CyberGuard</h1>

        <img
          src="/images/dashboard.gif"
          alt="Cyber Security"
          className="dashboard-img"
        />

        {/* Generative UI input */}

        <div style={{marginTop:"30px"}}>

          <h3>What do you want to check?</h3>

          <input
            type="text"
            placeholder="Example: check password strength"
            value={command}
            onChange={(e)=>setCommand(e.target.value)}
            style={{
              padding:"10px",
              width:"300px",
              marginRight:"10px"
            }}
          />

          <button onClick={handleCommand}>
            Run
          </button>

        </div>

        {/* Generative UI output */}

        <div style={{marginTop:"20px"}}>

          <GenerativeUI command={activeCommand}/>

        </div>

      </div>

    </div>

  );

}
