
import React,{useState} from "react";

export default function Assistant(){

  const [msg,setMsg]=useState("");
  const [reply,setReply]=useState("");

  function respond(){

    setReply("CyberGuard AI recommends caution.");

  }

  return(

    <div>

      <h1>AI Assistant</h1>

      <input
        value={msg}
        onChange={e=>setMsg(e.target.value)}
      />

      <button onClick={respond}>Ask</button>

      <p>{reply}</p>

    </div>

  );

}
