import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import FilterButtons from './components/FilterButtons/FilterButtons'

 

function App() {
  const [count, setCount] = useState(0)
  return (
    
    <div className='App'>
      <Header />
      <FilterButtons />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App