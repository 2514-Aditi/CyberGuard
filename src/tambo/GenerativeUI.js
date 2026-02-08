import React from "react";
import { withInteractable } from "@tambo-ai/react";

import Phishing from "../pages/Phishing";
import EmailPhishing from "../pages/EmailPhishing";
import PasswordAnalyzer from "../pages/PasswordAnalyzer";
import Assistant from "../pages/Assistant";

const PhishingInteractable = withInteractable(Phishing);
const EmailInteractable = withInteractable(EmailPhishing);
const PasswordInteractable = withInteractable(PasswordAnalyzer);
const AssistantInteractable = withInteractable(Assistant);

export default function GenerativeUI({ command }) {

  if (!command) return null;

  const text = command.toLowerCase();

  if (text.includes("password")) {
    return <PasswordInteractable />;
  }

  if (text.includes("email")) {
    return <EmailInteractable />;
  }

  if (text.includes("phishing") || text.includes("url")) {
    return <PhishingInteractable />;
  }

  if (text.includes("assistant") || text.includes("help")) {
    return <AssistantInteractable />;
  }

  return (
    <div className="card">
      No matching component found.
    </div>
  );
}
