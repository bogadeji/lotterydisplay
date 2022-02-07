// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFound from './Pages/404';
import Login from './Pages/Authorization/Login';
import Signup from './Pages/Authorization/Signup';
import ResetPassword from './Pages/Authorization/ResetPassword';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
