import React from 'react';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/userlogin';
import UserSignup from './pages/usersignup';
import CaptainLogin from './pages/captainlogin';
import CaptainSignup from './pages/captainsignup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="signup/" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
