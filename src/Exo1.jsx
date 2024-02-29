import React, { useState } from 'react';
import axios from "axios";





const Exo1 = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleChangeNom = (evt) => {
    setNom(evt.target.value)
  }

  const handleChangePrenom = (evt) => {
    setPrenom(evt.target.value)
  }

  return (
    <>
      <h1>Exercice 1</h1>

      <form>


        <label>
          <input

            type="text"
            value={nom}
            onChange={handleChangeNom}
            placeholder="Nom"
          />

        </label>
        <label>

          <input
            type="text"
            value={prenom}
            onChange={handleChangePrenom}
            placeholder="Prenom"
          />
        </label>
        <div>
          Bonjour {nom} {prenom}
        </div>

      </form>

    </>
  );
};

export default Exo1;
