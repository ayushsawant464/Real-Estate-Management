import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Buy from './pages/BuyPage'
import Rent from './pages/RentPage'
import Sell from './pages/SellPage'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/buy' element={<Buy/>}/>
    <Route exact path ='/rent' element ={<Rent/>}/>
    <Route exact path ='/sell' element ={<Sell/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App