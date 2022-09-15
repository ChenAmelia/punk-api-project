import React from 'react'
import "./FiltersList.scss"
import FilterItems from '../FilterItems/FilterItems'

const FiltersList = (props) => {

    const {toggleMenu} = props


  return (
    <div>
        <FilterItems toggleMenu={toggleMenu}/>
    </div>
  )
}

export default FiltersList