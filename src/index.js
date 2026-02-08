import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TamboProvider, TamboRegistryProvider } from "@tambo-ai/react";
import App from "./App";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <TamboProvider>
    <TamboRegistryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TamboRegistryProvider>
  </TamboProvider>
);
