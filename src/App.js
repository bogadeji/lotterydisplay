// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './Pages/Home/Home'
import Signup from './Pages/Authorization/Signup'
import Login from './Pages/Authorization/Login'
import ResetPassword from './Pages/Authorization/ResetPassword';
import NotFound from './Pages/404';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
