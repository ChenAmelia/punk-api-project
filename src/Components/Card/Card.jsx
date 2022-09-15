import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { img, name, tagline, abv, description} = props
  
  return (

    <div className='card'>

        <div className='cardImg'>
            <img className='cardImg__image' src={img}/>
        </div>

        <div className='cardText'>

           <div className='cardText__name'>
              <p className='cardText__name--text'>{name}</p>
           </div>

           <div className='cardText__middle'>
              <p className='cardText__middle--tagline'>{tagline}</p>
              <p className='cardText__middle--abv'>{`${abv}% vol`}</p>
           </div>

           <div className='cardText__description'>
              <p className='cardText__description--text'>{description}</p>
           </div>

        </div>

    </div>
   
  )
}

export default Card