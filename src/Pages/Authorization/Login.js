import React, { useEffect, useState } from "react";
import './Login.css';

function Login() {
    const loginData = {
        email: '', password: ''
    }

    const [formValues, setFormValues] = useState(loginData)
    const [formErrors, setFormErrors] = useState({});

    const [submitForm, setSubmitForm] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
        
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && submitForm) {

        }
    }, [formErrors, submitForm])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFormErrors(validate(formValues));
        setSubmitForm(true)
    }
    
    const validate = (values) => {
        const errors = {}
        
        if(!values.username) {
            errors.username = "Username is required"
        }
        if(!values.password) {
            errors.password = "Password is required"
        }
        return errors
    }
    return (
        <div className="login-page flow">
            <h1 className="page-title">Login</h1>
            <form onSubmit={handleSubmit} className="flow form">
                <h2 className="form-title">Login to your account</h2>
                <p className="form-heading">Thank you for getting back to Lottery Display, let's access our best recommendation for you</p>

                { (Object.keys(formErrors).length === 0 && submitForm) ? (
                    <div className="ui-message success">
                        <p>Login successfull!</p>
                    </div>
                ) : ''}
                <div className="form-inputs flow">
                <div className="input-group">
                    <label>
                        Username
                        <input type="text" placeholder="Email or Phone Number" value={formValues.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="input-group">
                    <label>
                        Password
                        <input type="text" placeholder="Password" value={formValues.password} onChange={handleChange} />
                    </label>
                </div>
                <div className="remember-reset flex">
                    <div>
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                    </div>

                    <a href="/auth/reset-password">Reset Password?</a>
                </div>

                {/* <input type="submit" value="Sign In" /> */}
                <button className="signin">Sign In</button>

                <p className="signup">Don't have an account yet? <a href="/auth/signup">Join Lottery Display</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;