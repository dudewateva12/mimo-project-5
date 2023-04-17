import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className='header-container'>
        <p>Fake Store</p>
        <AiOutlineShoppingCart className='shoppingcart-icon'/>

    </div>
  )
}

export default Header