
import React, { useEffect, useState } from 'react';
import axios from "axios";



const api = () => {

  const [liste,setListe] = useState([
   
    {
      "title":"test1"
    },
    {
      "title":"test2"
    }

  ]);
  useEffect(()=>{

  
    console.log("Démarrage de l'appli")
    axios.get('http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=avenger'),
    {
      Headers: {"Accept":"application/json"}
    }
  },[])

  return (
      <>
        <h2>Exercice API</h2>
        <div>
         {liste.map((themovie)=>(
          <div>{themovie.title}</div>
         ))}
      </div>
      </>
    );
}

export default Api;