import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {

    const {handleInput} = props;

  return (
    <div className='SearchBox'>
        <form>
            <input onInput={handleInput} placeholder='Search' className='search-bar'/>
        </form>
    </div>
  )
}

export default SearchBox