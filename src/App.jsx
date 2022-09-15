import "./App.scss";
import React, { useEffect } from 'react'
import { useState } from 'react'

import Nav from "./Components/Nav/Nav"
import Main from "./Components/Main/Main";

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchItems, setSearchItems] = useState("")
  const [filteredItems, setFilteredItems] = useState([])


  const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;


  useEffect(() => {
    getBeers(url)
  }, [])

  const getBeers = async() => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data)
  }

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchItems(cleanInput);

    if (searchItems !== "") {
      const newArr = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(searchItems);
      });
      setFilteredItems(newArr);
    } else {
      setFilteredItems(beers)
    }
  };

  return (
    <div className="app">

      <Nav handleInput = {handleInput}/>

      <div className="cardContainer">
       {beers &&  <Main beersDisplay={searchItems.length < 1 ? beers : filteredItems}/>}
      </div>

    

    

    </div>
  )
}

export default App
