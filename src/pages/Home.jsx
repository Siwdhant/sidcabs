import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="bg-[url('/lights1.jpg')] bg-center bg-cover bg-no-repeat h-screen pt-5 flex flex-col justify-between w-full">
      <img className="w-30 h-30 filter drop-shadow-lg transform scale-105" src="/sidcabs1.png" alt="SidCabs Logo" />
      <div className='bg-
#5a768c bg-opacity-75 py-5 px-5'>
          <h2 className='text-3xl text-white font-bold border border-black rounded border-4' >Get Started with SidCabs</h2>
          <Link to="login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">
               Continue
          </Link>
      </div>
    </div>
  ) 
}

export default Home
