import React from 'react'
import "./FilterItems.scss"

import blackcross from "../../assets/images/black-cross.png"

const FilterItems = (props) => {
    const {toggleMenu} = props;

  return (
    <div className='filter'>

        <div className='filter__content'>

            <img 
            src={blackcross}
            onClick={toggleMenu}
            className="filter__content--img"
            />

            <div className='filter__content--text'>
                High ABV > 6.0% <input type="checkbox" value="abv"/> <br />
                Classic Range <input type="checkbox" value="range"/> <br />
                Acidic <input type="checkbox" value="acidic"/>
            </div>

            



        </div>
        
    </div>
  )
}

export default FilterItems