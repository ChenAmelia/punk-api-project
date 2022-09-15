import React from 'react'
import "./Main.scss"
import CardList from '../CardList/CardList'

const Main = (props) => {

    const {beersDisplay} = props


  return (
    <div className="main">

        <CardList beersDisplay={beersDisplay}/>


    </div>
  )
}

export default Main