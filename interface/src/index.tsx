import "dotenv/config";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Web3Manager from "modules/Web3Manager";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Web3Manager>
      <App />
    </Web3Manager>
  </React.StrictMode>
);
