import React from "react";
export * from "./types";

const App = ({ greeting }: { greeting?: string }) => (
  <div>{`Hello ${greeting || "world"}`}</div>
);

export default App;
