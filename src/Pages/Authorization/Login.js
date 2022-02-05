import React, { useEffect, useState } from "react";;

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <h2>Login to your account</h2>
                <p>Thank you for getting back to Lottery Display, let's access our best recommendation for you</p>

                { (Object.keys(formErrors).length === 0 && submitForm) ? (
                    <div className="ui-message success">
                        <p>Login successfull!</p>
                    </div>
                ) : ''}
                <div>
                    <label>
                        Username
                        <input type="text" placeholder="Email or Phone Number" value={formValues.username} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input type="text" placeholder="Password" value={formValues.password} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <div>
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                    </div>

                    <a href="/auth/reset-password">Reset Password?</a>
                </div>

                <input type="submit" value="Sign In" />
                <button>Sign In</button>

                <p>Don't have an account yet? <a href="/auth/signup">Join Lottery Display</a></p>
            </form>
        </div>
    )
}

export default Login;