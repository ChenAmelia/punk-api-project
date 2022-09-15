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

  //Define the input text and convert to lowercase, and return a new array which match the search result
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

  //Define the function of checkbox, display different arraies based on the value
  //"first_brewed":"09/2007"
  const handleCheckBox = (event) => {

    if (event.target.checked) {

      if (event.target.value === "abv") {

        setBeers(beers.filter((beer) => beer.abv > 6))
      } 

      else if (event.target.value === "classicRange") {
        setBeers(beers.filter((beer) => beer.first_brewed.slice(3) < 2010))
      } 

      else if (event.target.value === "acidic") {
        setBeers(beers.filter((beer) => beer.ph < 4))
      } 
    } else {
      getBeers();
    }

  }

  return (
    <div className="app">

      <Nav handleInput = {handleInput} handleCheckBox ={handleCheckBox}/>

      <div className="cardContainer">
       <Main beersDisplay={searchItems.length < 1 ? beers : filteredItems}/>
      </div>

    </div>
  )
}

export default App
