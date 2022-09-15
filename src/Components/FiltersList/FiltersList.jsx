import React from 'react'
import "./FiltersList.scss"
import FilterItems from '../FilterItems/FilterItems'

const FiltersList = (props) => {

    const {toggleMenu, handleCheckBox} = props


  return (
    <div>
        <FilterItems toggleMenu={toggleMenu} handleCheckBox ={handleCheckBox} />
    </div>
  )
}

export default FiltersList