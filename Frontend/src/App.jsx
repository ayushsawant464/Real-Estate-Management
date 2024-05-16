import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Buy from './pages/BuyPage'
import Rent from './pages/RentPage'
import Sell from './pages/SellPage'
import Profile from './pages/ProfilePage'
import Property from './pages/Property/Id'
import PropertyS from './pages/Property/seller'
import Layout from './pages/Layout'


const App = () => {
  return (
    <BrowserRouter>
   
    <Routes>
    <Route exact path='/login' element={<Login/>}/>
    <Route path='/' element={<Layout/>}>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='buy' element={<Buy/>}/>
    <Route path ='rent' element ={<Rent/>}/>
    <Route path ='sell' element ={<Sell/>}/>
    <Route path ='property/:id' element ={<Property/>}/>
    <Route path ='/seller/property/:id' element ={<PropertyS/>}/>

    </Route>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App