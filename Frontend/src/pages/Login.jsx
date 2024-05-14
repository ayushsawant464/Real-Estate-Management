import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Home = () => {

    const [newUser,setnewUser]=useState(false);

  return (
    <div className='flex justify-center items-center min-h-screen'>

        <div className="flex flex-col min-w-[27%] border-White border-[2px] p-16 rounded-xl text-White">
            <div className='text-3xl text-center'>

            {!newUser && <div>Login</div>}
            {newUser && <div >Signup</div>}
            </div>
            {!newUser && <LoginForm/>}
            {newUser && <SignupForm/> }
            {newUser &&
            <div>Already Registered?

            <span className='hover:cursor-pointer' onClick={()=>{setnewUser(false)}}>Login</span>
            </div>}
            {!newUser && 
            <div>
                Don't have an account? 
            <span className='hover:cursor-pointer' onClick={()=>{setnewUser(true)}}>Register</span>
            </div>
            }
        </div>


    </div>
  )
}

export default Home