import React from 'react'
import "./FilterItems.scss"

import blackcross from "../../assets/images/black-cross.png"

const FilterItems = (props) => {
    const {toggleMenu, handleCheckBox} = props;

  return (
    <div className='filter'>

        <div className='filter__content'>

            <img 
            src={blackcross}
            onClick={toggleMenu}
            className="filter__content--img"
            />

            <div className='filter__content--text'>

                <label className='filter__content--filter'>
                    <input onChange={handleCheckBox}  type="checkbox" value="abv" /> 
                    High ABV higher than 6.0% <br />
                </label>

                <label className='filter__content--filter'>
                    <input onChange={handleCheckBox} type="checkbox" value="classicRange" /> 
                    Classic Range <br />
                </label>

                <label className='filter__content--filter'> 
                    <input onChange={handleCheckBox} type="checkbox" value="acidic" /> 
                    Ph less than 4
                </label>
               
            </div>

        </div>
        
    </div>
  )
}

export default FilterItems