import React from "react";
import ReactDOM from "react-dom";
import App from "@app/components";
import App2 from "@app/api";

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);
