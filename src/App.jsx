
import React from 'react'
import Header from './Header'
import { BrowserRouter  } from 'react-router-dom'
//import Footer from './Footer'
import Home from './Home'
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Header />
    <div className="flex">
        <p className='font-bold'>Ear Phone</p>
        </div>
       <Home/>
       
      </BrowserRouter>
    </div>
  )
}

export default App
