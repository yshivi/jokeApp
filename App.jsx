import React from "react";
import { useState,useEffect } from 'react'
import "./App.css"
// import './Joke.css';
const App = () => {
  const [showJoke, setShowJoke] =useState([]);

  const fetchApi = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) =>{
        return response.json()
      })
      .then((data) => {
        if(data.type==="single"){
            setShowJoke(data.Joke)
        }else{
            return setShowJoke(data.category), setShowJoke(data.delivery)
        }
      });
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="joke">
        <h1>This is a Jocks</h1>
      <p>{showJoke}</p>
      <button onClick={fetchApi}> Click to generate a joke.</button>
    </div>
  );
}

export default App;
