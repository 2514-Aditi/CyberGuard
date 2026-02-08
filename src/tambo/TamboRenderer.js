
import React from "react";

export default function TamboRenderer({result}){

  return(
    <div className="card">

      <h3>Risk Level: {result.risk}</h3>

      <p>{result.explanation}</p>

      <p>{result.recommendation}</p>

    </div>
  );

}
