import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Image from '../assets/background.png'

const Home = () => {

    const [newUser,setnewUser]=useState(false);

  return (
    <div style={{backgroundImage:`url(${Image})`}} className='bg-cover'>
    <div   className='flex justify-center items-center min-h-screen bg-black/20 '>

        <div className="flex flex-col min-w-[27%] border-White border-[2px] 
        p-16 rounded-xl text-White backdrop-blur-xl bg-white/5">
            <div className='text-3xl text-center'>

            {!newUser && <div>Login</div>}
            {newUser && <div >Signup</div>}
            </div>
            {!newUser && <LoginForm/>}
            {newUser && <SignupForm/> }
            {newUser &&
            <div>Already Registered?

            <span className='hover:cursor-pointer hover:underline' 
            onClick={()=>{setnewUser(false)}}>Login</span>
            </div>}
            {!newUser && 
            <div>
                Don't have an account? 
            <span className='hover:cursor-pointer hover:underline' 
            onClick={()=>{setnewUser(true)}}>Register</span>
            </div>
            }
        </div>


    </div>
    </div>
  )
}

export default Home