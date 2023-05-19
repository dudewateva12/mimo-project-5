import React, {useContext, useState} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import CartProductCard from '../../components/CartProductCard/CartProductCard'


function Favorites() {

     //change to use global state
  //NOTE {} not []
  const { favorites, cartTotal } = useContext(FavoritesContext)

  return (
    <section>
    <div className='favorites-container'>
        <div className='product-descriptors'>
            <h4>Item</h4>
          <div>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Remove</h4>
          </div>
        </div>
        <div className='favorites-characters'>



          {/* *** Added CartProductCard  */}
          {
          favorites.map(item=><CartProductCard key={item.id} product={item}/>)
          //favorites.map(item =><p>{item.name}</p>)
          }



        </div>



        {/* *** Placed in div and added total sum  */}
        <div className='total-and-checkout'>
          <p>Total ${cartTotal.toFixed(2)}</p>
          <button className='checkout-btn'>Checkout</button>
        </div>


        
    </div>
    </section>
  )
}

export default Favorites