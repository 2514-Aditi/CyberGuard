
import React,{useState} from "react";
import { analyzeThreat } from "../ai/threatEngine";
import TamboRenderer from "../tambo/TamboRenderer";

export default function Phishing(){

  const [input,setInput]=useState("");
  const [result,setResult]=useState(null);

  function analyze(){

    setResult(analyzeThreat(input));

  }

  return(

    <div>

      <h1>Phishing Detection</h1>

      <textarea
        value={input}
        onChange={e=>setInput(e.target.value)}
      />

      <button onClick={analyze}>Analyze</button>

      {result && <TamboRenderer result={result}/>}

    </div>

  );

}
