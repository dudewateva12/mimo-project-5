import React, {useContext, useState} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import CartProductCard from '../../components/CartProductCard/CartProductCard'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'


function Favorites() {
  const [isOpen, setIsOpen] = React.useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay:{
      backgroundColor:'rgba(0,0,0, 0.6)'
    }
  };

  Modal.setAppElement(document.getElementById('root'));

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
          <button className='checkout-btn' onClick={()=>setIsOpen(true)}>Checkout</button>
        </div>

        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal">
        <div className='modal-container'>
          <div className='modal-items'>
          <h4>Your Order was successful!</h4>
          <br/>
          <br/>
          <h4>Check your email for the order confirmation. Thank you for shopping with Fake Store!</h4>
          <br/>
          <br/>
          <Link to={`/`} className='modal-link'>Return to Main Page</Link>
          </div>
        </div>
        
       
      </Modal>


        
    </div>
    </section>
  )
}

export default Favorites