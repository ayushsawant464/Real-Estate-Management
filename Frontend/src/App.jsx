import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Buy from './pages/BuyPage'
import Rent from './pages/RentPage'
import Sell from './pages/SellPage'
import Profile from './pages/ProfilePage'
import Property from './pages/Property/Id'
import PropertyS from './pages/Property/seller'
import PropertyA from './pages/Property/admin'
import Layout from './pages/Layout'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Home from './pages/Home'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/login' element={<Login/>}/>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='buy' element={<Buy/>}/>
    <Route path ='rent' element ={<Rent/>}/>
    <Route path ='sell' element ={<Sell/>}/>
    <Route path ='property/:type/:id' element ={<Property/>}/>
    <Route path ='/seller/property/:id' element ={<PropertyS/>}/>

    </Route>
    <Route path='/admin'>
      <Route index element={<Admin/>}/>
      
      <Route path='login' element={<AdminLogin/>}/>
      <Route path='property/:id' element={<PropertyA/>}/>
    </Route>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App;