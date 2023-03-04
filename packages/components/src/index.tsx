import React from 'react';

export type MyType = {
  fancyProp: string;
};

const App = ({ greeting }: { greeting?: string }) => (
  <div>{`Hello ${greeting || 'world'}`}</div>
);

export default App;
