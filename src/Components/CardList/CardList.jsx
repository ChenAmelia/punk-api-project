import React from 'react'
import "./CardList.scss"
import Card from "../../Components/Card/Card"

const CardList = (props) => {

    const {beersDisplay} = props;

  return (
    <div className='cardList'>

        {beersDisplay.map((beers) => {

            return (
                <Card 
                key = {beers.id}
                img = {beers.image_url}
                name = {beers.name}
                tagline = {beers.tagline}
                abv = {beers.abv}
                description = {beers.description}
                />
            )
        })}
    </div>
  )
}

export default CardList