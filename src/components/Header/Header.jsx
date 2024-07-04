import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className='flex text-xl space-x-5  '>
        <Link to={"/"} >Home</Link> 
        <Link to={"/review"} >Order Review</Link> 
        <Link to={'/grandpa'}>GrandPa</Link>
        <Link to={"/about"} >About</Link> 
        <Link to={"/contact"} >Contact</Link> 
      </nav>
    );
};

export default Header;