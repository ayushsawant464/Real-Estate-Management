import React, { useState } from 'react'
import {signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import {firebaseAuth} from "../utils/firebase-config"
import {useNavigate} from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const LoginForm = () => {
  const[form,setform] = useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate();
  const[error,seterror]= useState(null);

  const handleSubmit = async ()=>{
    
    try {
      const{email,password} = form
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log(error)
    }

  };
  

  onAuthStateChanged(firebaseAuth,(currentUser)=>{

    if(currentUser){
      
       navigate('/buy')};
  })
  return (
    <div>
    <div className='flex flex-col my-8 gap-8'>

      <div className='border-white border-2 rounded-full px-6 py-3 flex items-center'>

        <MdOutlineEmail className='text-xl mr-4 text-Red' />
        <input className='text-slate-300 bg-transparent  focus:outline-none ' 
        type="email" placeholder='Email ID' name="email" id="email" value={form.email} onChange={(e)=>{setform({...form, [e.target.name]:e.target.value})}}/>
      </div>

      <div className='border-white border-2 rounded-full px-6 py-3 flex items-center'>

        <CiLock className='mr-4 text-Red text-2xl'/>
        <input className='text-slate-300 bg-transparent  focus:outline-none ' 
        type="password" placeholder='Password' name="password" id="password" value={form.password} onChange={(e)=>{setform({...form, [e.target.name]:e.target.value})}}/>
      </div>
      <button onClick={handleSubmit} className='bg-Black text-White rounded-full p-2 hover:bg-black font-bold transition-colors duration-200'>Login</button>
    </div>

    
    </div>
  )
}

export default LoginForm