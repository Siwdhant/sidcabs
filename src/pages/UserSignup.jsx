import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname,setFirstName ] = useState('');
  const [lastname,setLastName ] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();  
    setUserData({
      username:{
        firstname:firstname,
        lastname:lastname
      },
      email: email,
      password :password
    });
    console.log(userData);
    setEmail('');
    setPassword('');
    setFirstName
    setLastName('')
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between w-full'>
      <div>
        <img className="w-23 h-20 mb-3 item-center justify-center" src="/sidcabs1.png" alt="SidCabs Logo" />
        <form onSubmit={submitHandler}>
     
       <h3 className='text-xl font-medium mb-2'>Whats Your name</h3>
       <div className='flex gap-4'>
       <input 
            required
            className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            type="text" 
            placeholder="First name" 
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
           <input 
            required
  
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            type="text" 
            placeholder="Last name" 
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
       </div>
              
          <h3 className='text-lg font-medium mb-2'>Whats Your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text'
            type="email" 
            placeholder="Email@example.com" 
          />  
          <h3 className='text-xl font-medium mb-2'>What's your Password</h3>
          <input 
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder="Password" 
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text'
          >
            Login
          </button>
        </form>
        <p className='center-align'>Already Have a account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'> Our Privacy Policy outlines the information we collect, how we use it, and the choices you have regarding your data. We collect data to provide and improve our services, ensure safety, and offer personalized experiences. You can access and manage your information through the SidCabs app's privacy settings. For more details, please review our full Privacy Policy.</p>
      </div>
    </div>
  );
};

export default UserSignup;

