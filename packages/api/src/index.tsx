import React from 'react';

const App2 = ({ greeting }: { greeting?: string }) => (
  <div>{`Hello 2 ${greeting || 'world'}`}</div>
);

export default App2;
