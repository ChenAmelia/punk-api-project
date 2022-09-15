import React from 'react'
import { useState } from 'react'
import './Nav.scss';
import SearchBox from '../SearchBox/SearchBox';

import menu from "../../assets/images/menu-icon.png"


const Nav = (props) => {
    const {handleInput} = props;


  return (
    <div>

        <div className='nav'>
            <div className='nav__icons'>

                <div className='nav__icons--menu'>
                    <img src={menu} className='black-menu'/>
                </div>

                <div className='nav__icons--search'>
                    <SearchBox handleInput={handleInput}/>
                </div>
            </div>

            <div className='nav__title'>

                <h1 className='title'>Best Beers</h1>

            </div>
            
        </div>

    </div>
  )
}

export default Nav