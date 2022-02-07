import React from "react";
import Authorization from "./Authorization";
import './Authorization.css'

function ResetPassword() {


    
    return (
        <div className="authorization grid">
            <Authorization />
            <div className="routes">
                <div className="reset-page flow">
                    <h1 className="page-title">Reset Password</h1>

                    <form className="flow form">
                        <h2 className="form-title">Reset your password</h2>
                        <p className="form-heading">Enter your email address and we'll send you a link to reset your password</p>
                        <div className="form-inputs flow">
                            <div className="input-group">
                                <label>
                                    Username
                                    <input type="text" placeholder="Email or Phone Number" />
                                </label>
                            </div>

                            <button className="reset-password
                            ">Reset Password</button>

                            <p>Don't have an account yet? <a href="/signup">Join Lottery Display</a></p>
                            <p>Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;