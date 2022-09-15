import React from 'react'
import "./Main.scss"
import CardList from '../CardList/CardList'

const Main = ({beersDisplay} ) => {

  return (
    <div className="main">

        <CardList beersDisplay={beersDisplay}/>


    </div>
  )
}

export default Main