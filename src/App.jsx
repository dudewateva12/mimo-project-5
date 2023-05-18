import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details/Details'
import ContactUs from './pages/ContactUs/ContactUs'
import Favorites from './pages/Favorites/Favorites'
import FavoritesContextProvider from './Contexts/FavoritesContext'


 

function App() {
  const [count, setCount] = useState(0)
  return (

    <BrowserRouter>
    <FavoritesContextProvider>
      <Header />

      <Routes>
      
      <Route path='/' element={<Homepage />} />

      <Route path='/details/:productId' element={<Details />} />

      <Route path='/contactus' element={<ContactUs />} />

      <Route path='/favorites' element={<Favorites />} />
      
      

      </Routes>

      <Footer />
      </FavoritesContextProvider>
    </BrowserRouter>
    
    
  )
}

export default App