import { AiOutlineShoppingCart } from "react-icons/ai"
import './Header.css'
import {Link} from 'react-router-dom'




// *** Added imports ***
import React, {useContext} from 'react'
import { FavoritesContext } from '../../Contexts/FavoritesContext'




function Header() {



  // *** Added context ***
  const { cartCounter } = useContext(FavoritesContext)
  





  return (
    <div className='header-container'>

        <Link to={`/`}>Fake Store</Link>




        {/* *** Added new div to hold number counter for cart *** */}
        <div className="cart">
          <p className="cart-item-counter">{cartCounter}</p>
          <Link to='/favorites'><AiOutlineShoppingCart className='shoppingcart-icon'/></Link>
        </div>


        

    </div>
  )
}

export default Header