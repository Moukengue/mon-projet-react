import React, { useState, useEffect } from 'react';

function Exo2()  {
  const [compteur, setCompteur] = useState(0);

  const handleClick = () => {
    let tmp;

    if (compteur<20) {
      
      tmp = compteur+1;
    }
    else {
      tmp = "max"
    }

    setCompteur(tmp);
  }


  return (
    <>
      <h2>Exercice 2</h2>

      <button onClick={handleClick}>Compteur = {compteur}</button>
    </>
  );
};

export default Exo2;
