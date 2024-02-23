import React from 'react';
import ParentComponent from './components/ParentComponent';
import Exo1 from './Exo1';
import Exo2 from './Exo2';
import Exo3 from './Exo3';

const App = () => {
  return (
    <>
      <h1>Mon React</h1>
      <ParentComponent/>
      <hr />
      <Exo1 />
      <hr />
      <Exo2 />
      <hr />
      <Exo3/>
    </>
  );
};

export default App;
