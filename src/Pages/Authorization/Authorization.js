import React from "react";
import './Authorization.css'


function Authorization() {
    return (
            <div className="authorization-page flow">

                <div className="logo desktop-logo"><a href="/home"><img src="/logo2.svg" alt="" /></a></div>
                <div className="logo mobile-logo"><a href="/home"><img src="/logo.svg" alt="" /></a></div>
                
                <p className="description">A few clicks away from creating your Lottery Display</p>
                <img src="/assets/hero.svg" alt="" />
            </div>
    )
}

export default Authorization;