import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// this manifest is used temporarily for development purposes
// "url": "https://ah1n.github.io/first_contract_front_end-master",
const manifestUrl =
    "https://ah1n.github.io/first_contract_front_end-master";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
