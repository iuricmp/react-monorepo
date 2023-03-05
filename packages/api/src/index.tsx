import React from "react";

const App2 = ({ greeting }: { greeting?: string }) => (
  <div>{`Hello 2 ${greeting || "world"}`}</div>
);

export type DemoType = {
  prop1: string;
};

export default App2;
