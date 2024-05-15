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
      
       navigate('/home')};
  })
  return (
    <div>
    <div className='flex flex-col my-8 gap-8'>

      <div className='border-White border-2 rounded-full px-6 py-3 flex items-center'>

      <input className='text-slate-300 bg-transparent  focus:outline-none ' 
      type="email" placeholder='Email ID' name="email" id="email" value={form.email} onChange={(e)=>{setform({...form, [e.target.name]:e.target.value})}}/>
      <MdOutlineEmail className='text-xl' />
      </div>

      <div className='border-White border-2 rounded-full px-6 py-3 flex items-center'>

      <input className='text-slate-300 bg-transparent  focus:outline-none ' 
      type="password" placeholder='Password' name="password" id="password" value={form.password} onChange={(e)=>{setform({...form, [e.target.name]:e.target.value})}}/>
      <CiLock className='text-2xl'/>
      </div>
      <button onClick={handleSubmit} className='bg-White text-black rounded-full p-2 hover:bg-slate-300'>Login</button>
    </div>

    
    </div>
  )
}

export default LoginForm