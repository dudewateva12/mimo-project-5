import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Header.css'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className='header-container'>
        <Link to={`/`}>Fake Store</Link>
        
        <Link to='/favorites'><AiOutlineShoppingCart className='shoppingcart-icon'/></Link>

    </div>
  )
}

export default Header