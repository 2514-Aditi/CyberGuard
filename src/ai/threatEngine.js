
export function analyzeThreat(input){

  let risk="Safe";
  let explanation="No threat detected.";
  let recommendation="No action needed.";

  if(input.includes("login")||input.includes(".xyz")){
    risk="Dangerous";
    explanation="Phishing indicators detected.";
    recommendation="Avoid this link.";
  }

  return {risk, explanation, recommendation};

}
