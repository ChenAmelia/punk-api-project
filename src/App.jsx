import "./App.scss";
import React, { useEffect } from 'react'
import { useState } from 'react'

import Nav from "./Components/Nav/Nav"
import Main from "./Components/Main/Main";

const App = () => {

  const [beers, setBeers] = useState([]);
  const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;


  useEffect(() => {
    getBeers(url)
  }, [])

  const getBeers = async() => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data)
  }



  return (
    <div className="app">

    <Nav />

    <div className="cardContainer">
      {beers &&  <Main beersDisplay={beers}/>}
    </div>

   
    
    </div>
  )
}

export default App
