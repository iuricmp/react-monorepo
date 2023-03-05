import React from "react";
import ReactDOM from "react-dom";
import App, { MyType } from "@app/components";
import App2, { DemoType } from "@app/api";

const demoType: DemoType = {
  prop1: "propValue",
};

const myType: MyType = {
  fancyProp: "fancyProp",
};

console.log("demoType", demoType);
console.log("myType", myType);

ReactDOM.hydrate(
  <React.StrictMode>
    <div>
      <App />
      <App2 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
