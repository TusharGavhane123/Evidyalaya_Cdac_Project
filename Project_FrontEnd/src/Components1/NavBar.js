import './Style.css';
import React from 'react'
import {NavLink} from 'react-router-dom';

function  NavBar() {
  return (
    <div className='navbar px-5 trans' >
    <div><img  className='img' src="./image/images_low.png" ></img> </div>
    <a href="#"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold' style={{fontFamily:'cursive'}} >E-Vidyalaya</span></a>
   <NavLink to="/"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold'>Home</span></NavLink>
   <NavLink to="/about"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold'>About</span></NavLink>
   <NavLink to="/contact"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold'>Contact</span></NavLink>
   <NavLink to="/signin"  style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold'>Log in</span></NavLink>

   
    
    </div>
  )
}

export default   NavBar ;

