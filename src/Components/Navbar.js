import React from 'react';
import Searchbar from './Searchbar';
import { FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({toggleSidebar, updateSearchResults}) =>{
  return (
    <div className='navbar-container'> 
        <div className='home-container'>
            <button id='home-button' onClick={toggleSidebar}>{React.createElement(GiHamburgerMenu)}</button>
            <div className='home-label'>{React.createElement(FaYoutube)}<label>Youtube</label></div>
        </div>
        <Searchbar updateSearchResults={updateSearchResults}></Searchbar>
    </div>
  )
}

export default Navbar;
