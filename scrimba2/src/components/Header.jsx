import React from 'react';
import "./Header.css"
import logo from "../assets/Logo.png"

const Header = () => {
    return (
        <div className='header-container'>
        <img className='header-img' src={logo}/>
           <h3 className='header-h3'>React Course - Project 3</h3>
        </div>
    );
}

export default Header;
