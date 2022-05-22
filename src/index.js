import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  
    <MoralisProvider serverUrl="https://qtnthkhru9me.usemoralis.com:2053/server" appId="9RjibgB5PG80KbtSJABR5lTaXCAim87kbotG7byl">
      <App />
    </MoralisProvider>,
  
  document.getElementById("root")
);