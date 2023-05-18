import React, {useContext} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import ProductCard from '../../components/ProductCard/ProductCard'


function Favorites() {

     //change to use global state
  //NOTE {} not []
  const {favorites} = useContext(FavoritesContext)

  return (
    <div className='favorites-container'>
        <div className='product-descriptors'>
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Remove</h4>
        </div>
        <div className='favorites-characters'>
        {
        favorites.map(item=><ProductCard key={item.id} product={item}/>)
        //favorites.map(item =><p>{item.name}</p>)
        }
        </div>
        <button className='checkout-btn'>Checkout</button>
        
    </div>
  )
}

export default Favorites