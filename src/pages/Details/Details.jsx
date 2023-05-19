import './Details.css'
import axios from 'axios'
import React, {useContext} from 'react'




// Added these imports
import { useParams } from 'react-router-dom'
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import {Link} from 'react-router-dom'




function Details() {



    // added the context line
    const { addCharacter } = useContext(FavoritesContext)



    const {productId} = useParams()
    const [productDetail, setProductDetail] = React.useState('')

        React.useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res =>{
                console.log(res.data)
                //store it in state
                setProductDetail(res.data)
            })
            .catch(err => console.log(err))

        }, [] //this means only run once when page loads

    )

  return (
    <div className='details-container'>
        <div className='product-info'>
            <div className='details-img'>
        <img src={productDetail?.image} 
        />
        </div>
            <div className='details-items'>
            <p>{productDetail?.title}</p>
            <p>{productDetail?.price}</p>
            
            <p>Description: {productDetail?.description}</p>




            {/* Added the onClick and Link ot cart */}
            <Link to={`/favorites`}>
                <button className='add-to-cart-btn' onClick={()=>{addCharacter(productDetail)}}>Add to Cart</button>
            </Link>



            </div>
        </div>
    </div>
  )
}

export default Details