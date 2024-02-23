import React from 'react';
import ChildComponent from './ChildComponent';  

const ParentComponent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent message="bonjour!" />
    </div>
  );
};

export default ParentComponent;
