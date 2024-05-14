import React, { useState } from 'react'
import {signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import {firebaseAuth} from "../utils/firebase-config"
import {useNavigate} from 'react-router-dom'

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
    <div className='flex flex-col my-8'>
      <label htmlFor="email">Email</label>
      <div>

      <input className='text-slate-300 bg-transparent pb-2 border-b-2 border-b-red-600 mt-3 mb-5 focus:outline-none' 
      type="email" name="email" id="email" value={form.email} onChange={(e)=>{setform({...form, [e.target.name]:e.target.value})}}/>
      </div>
      <label htmlFor="password">Password</label>
      <div>

      <input className='text-slate-300 bg-transparent pb-2 border-b-2 border-b-red-600 mt-3 mb-5 focus:outline-none' 
      type="password" name="password" id="password" value={form.password} onChange={(e)=>{setform({...form, [e.target.name]:e.target.value})}}/>
      </div>
      <button onClick={handleSubmit} className='bg-red-600 rounded my-2 p-2 hover:bg-red-500'>Login</button>
    </div>

    
    </div>
  )
}

export default LoginForm