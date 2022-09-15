import React from 'react'
import { useState } from 'react'
import './Nav.scss';
import SearchBox from '../SearchBox/SearchBox';
import menu from "../../assets/images/menu-icon.png"
import FiltersList from '../FiltersList/FiltersList';

import logo from "../../assets/images/logo.png"


const Nav = (props) => {
    const {handleInput} = props;

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


  return (
    <div>

        <div className='nav'>

            {showMenu && <FiltersList toggleMenu={toggleMenu}/>}

            <div className='nav__icons'>

                <div className='nav__icons--menu'>
                    <img src={menu} className='black-menu' onClick={toggleMenu}/>
                </div>

                <div className='nav__icons--search'>
                    <SearchBox handleInput={handleInput}/>
                </div>
            </div>

            <div className='nav__logo'>

                <img src={logo} className="logo"/>

            </div>
            
        </div>

    </div>
  )
}

export default Nav