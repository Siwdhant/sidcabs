import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setcaptainData] = useState('')
  
    
    const submitHandler = (e) => {
      e.preventDefault();
      setcaptainData({
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
    }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between w-full'>   
    <div>
    <img className="w-23 h-20 mb-3 item-center justify-center " src="/sidcabs1.png" alt="SidCabs Logo" />
   
   <form onSubmit={(e) => {
      submitHandler(e);
    }}>

   <h3 className='text-xl mb-2'>Whats your Email</h3>
   <input 
   required
   value={email}
    onChange={(e) => setEmail(e.target.value)}
   className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text'
   type="email" 
   placeholder="Email@example.com" />

   <h3 className='text-xl mb-2'>Whats your Password</h3>
   
   <input 
   required
   className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text'
   value={password}
   onChange={(e) => setPassword(e.target.value)} 
   type="password" 
   placeholder="Password" />

   <button
      className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text'
    >Submit</button>
    </form>
    <p className='center-align'>First Time Onboard? <Link to='/captain-signup' className='text-blue-600'>Register as Captain  </Link></p>
     </div>
    <div>
      <Link 
      to='/login' 
       className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text'
       >Sign in as User </Link>
    </div>
  </div>
  )
}


export default CaptainLogin;
