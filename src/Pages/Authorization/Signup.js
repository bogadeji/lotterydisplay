import React, { useEffect, useState } from "react";
import './Signup.css'

async function registerUser(data) {
    console.log(data)
    return fetch('https://c-sport.tk/api/users/auth/register/', {
      method: 'POST',
    //   mode: 'no-cors',
      body: JSON.stringify(data)
    })
      .then(res => { console.log(res)})

      
   }

function Signup() {

    const registerData = {
        email: '', first_name: '', last_name: '', password1: '', password2: '', phone: ''
    }

    const [formValues, setFormValues] = useState(registerData );
    const [formErrors, setFormErrors] = useState({});

    const [submitForm, setSubmitForm] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
        
    }

    useEffect(() => {
        // console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && submitForm) {

        }
    }, [formErrors, submitForm])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate(formValues);
        setFormErrors(validate(formValues));
        const user = await registerUser(formValues)
        console.log(user)
        setSubmitForm(true)

    }
    
    const validate = (values) => {
        const errors = {}
        const emailRegex = /^[^\s@]+a[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.first_name) {
            errors.first_name = "First name is required"
        }
        if(!values.last_name) {
            errors.last_name = "Last name is required"
        }
        if(!values.email) {
            errors.email = "Email is required"
        } else if(!emailRegex.test(values.email)) {
            errors.email = "This is not a valid email address"
        }
        if(!values.phone) {
            errors.phone = "Phone number is required"
        }
        if(!values.password1) {
            errors.password1 = "Password is required"
        }
        if(!values.password2) {
            errors.password2 = "Password Confirmation is required"
        } else if (values.password2 !== values.password1) {
            errors.password2 = "Passwords do not match"
        }
        return errors
    }

    return (
        <div className="signup-page flow">
            <h1 className="page-title">Register</h1>

            <form onSubmit={handleSubmit} className="form flow">
                <h2 className="form-title">Manage all your lottery efficiently</h2>
                <p className="form-heading">Let's get you all set up so you can verify your personal account and begin setting up your profile</p>

                { (Object.keys(formErrors).length === 0 && submitForm) ? (
                    <div className="ui-message success">
                        <p>Account created successfully!</p>
                    </div>
                ) : ''}
                <div className="form-inputs flow">
                    <div className="grid input-grid">
                        <div className="input-group">
                            <label htmlFor="first_name">First Name</label>
                            <input name="first_name" type="text" value={formValues.first_name} onChange={handleChange} />
                            <p>{ formErrors && formErrors.first_name }</p>
                        </div>
                        <div className="input-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input name="last_name" type="text" value={formValues.last_name} onChange={handleChange} />
                            <p>{ formErrors && formErrors.last_name }</p>
                        </div>
                    </div>

                    <div className="grid input-grid">
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input name="phone" type="number" value={formValues.phone} onChange={handleChange} />
                            <p>{ formErrors && formErrors.phone }</p>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" value={formValues.email} onChange={handleChange} />
                            <p>{ formErrors && formErrors.email }</p>
                        </div>
                    </div>

                    <div className="grid input-grid">
                        <div className="input-group">
                            <label htmlFor="password1">Password</label>
                            <input name="password1" type="password" value={formValues.password1} onChange={handleChange} />
                            <p>{ formErrors && formErrors.password1 }</p>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input name="password2" type="password" value={formValues.password2} onChange={handleChange} />
                            <p>{ formErrors && formErrors.password2 }</p>
                        </div>
                    </div>
                </div>


        
                <div className="terms">
                    <div>
                        <label>
                            <input type="checkbox" />
                            Yes, I want to receive Lottery Display emails
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" />
                            I agree to all the <a href="/terms-and-private-policy">Terms, Privacy Policy</a> and <a href="/fees">Fees</a>
                        </label>
                    </div>
                </div>

                {/* <input type="submit" value="Create Account" /> */}
                <button className="signup">Create Account</button>

                <p className="signin">Already have an account? <a href="/auth/login">Login</a></p>
            </form>
        </div>
    )
}

export default Signup;