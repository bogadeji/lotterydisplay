import React from "react";
import { Routes, Route} from 'react-router-dom';
import Signup from './Signup'
import Login from './Login'
import ResetPassword from './ResetPassword';
import './Authorization.css'


function Authorization() {
    return (
        <div className="authorization grid">
            <div className="authorization-page flow">

                <div className="logo desktop-logo"><a href="/home"><img src="/logo2.svg" alt="" /></a></div>
                <div className="logo mobile-logo"><a href="/home"><img src="/logo.svg" alt="" /></a></div>
                
                <p className="description">A few clicks away from creating your Lottery Display</p>
                <img src="/assets/hero.svg" alt="" />
            </div>
            <div className="routes">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/colors" />
                </Routes>
            </div>
        </div>
    )
}

export default Authorization;