import React from 'react'
import HomePic from '../assets/Homepic.svg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className='w-full flex items-center justify-center flex-col mb-10'>
            <img src={HomePic} alt="img" className='w-[60%]'/>
            <div className='flex flex-row'>
                <div className='bg-Red p-2 rounded-md text-white mr-4'>
                    <Link to='/buy'>
                        Buy Properties
                    </Link>
                </div>
                <div className='bg-Red p-2 rounded-md text-white ml-4'>
                    <Link to='/rent'>
                        Rent Properties
                    </Link>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default Home;