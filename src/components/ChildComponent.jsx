import React from 'react';


const ChildComponent = (props) => {
  return (
    <>
      <h3>Component enfant !!!</h3>
      <p>{props.message}</p>
    </>
  );
};

export default ChildComponent;