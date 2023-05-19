import React, {useContext} from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import { IoHeartCircle, IoHeartCircleOutline } from 'react-icons/io5';
import { FavoritesContext } from '../../Contexts/FavoritesContext';


function ProductCard({product}) {
 //change to use global state
  //NOTE {} not []
  const { favorites } = useContext(FavoritesContext)
//create variable for heart
  //const isFavorite = false;
  //need to change to state
  const [isFavorite, setIsFavorite] = React.useState(false)
//need to check if this character is a favorite
  //anytime favorites changes
  React.useEffect(
    ()=>{
      console.log('update isFavorite')
      //is this char in fav
      setIsFavorite(favorites.find(item=>product.id === item.id))
      //if not found returns undefined which is considered false

    }, [favorites]
  )
  return (
   
    <div className='product-card'> 
     {
            isFavorite?
            <IoHeartCircle className='heart-icon' />
            :
            <IoHeartCircleOutline className='heart-icon' />
          }
        {/* <IoHeartCircle className='heart-icon'/> */}
       <div className='product-img'><img src={product.image} /></div>
        <p id='product-title'>{product.title}</p>
        <p id='product-category'>{product.category}</p>
        <p id='product-price'>{product.price}€</p>
        <Link to={`/details/${product.id}`} id='see-details-btn'>See Details</Link>
    </div>
  )
}

export default ProductCard