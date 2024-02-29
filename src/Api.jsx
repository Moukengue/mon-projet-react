
import React, { useEffect, useState } from 'react';
import axios from "axios";




const Api      = () => {
  const [texte, setTexte] = useState("")
  const [liste,setListe] = useState([
   
    {
      "title":"test1"
    },
    {
      "title":"test2"
    }

  ]);
  useEffect(()=>{

    axios.get('http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=avenger' ,  {
      Headers: {"Accept":"application/json"}
    }).then(
     (reponse)=>{
      console.log(reponse.data.results);
       // Ajouter le nouvel élément à la liste
      setListe(reponse.data.results);
     }
    )

    //console.log("Démarrage de l'application...")
       
  
  },[])

  return (
      <>
        <h2>Exercice API</h2>
        <input
        type="texte"
        value={texte}
        onChange={(reponse) => setListe(e.data.results)}
       
      />
      
      <button onClick={handleAjouterElement}>Ajouter</button>
        <div>
         {liste.map((themovie,index)=>(
          <div  key={index}>{themovie.title}</div>
         ))}
      </div>

      
      </>
    );
}

export default Api;