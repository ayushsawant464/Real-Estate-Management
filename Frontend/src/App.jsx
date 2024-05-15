import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/BuyPage'
import ProfilePage from './pages/ProfilePage'
import RentPage from './pages/RentPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BuyPage from './pages/BuyPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<ProfilePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App