import React from "react";;

function ResetPassword() {


    
    return (
        <div>
            <h1>Reset Password</h1>

            <form>
                <h2>Login to your account</h2>
                <p>Thank you for getting back to Lottery Display, let's access our best recommendation for you</p>

                <label>
                    Username
                    <input type="text" placeholder="Email or Phone Number" />
                </label>

                <input type="submit" value="Reset Password" />
                <button>Reset Password</button>

                <p>Don't have an account yet? <a href="/auth/signup">Join Lottery Display</a></p>
                <p>Already have an account? <a href="/auth/login">Login</a></p>
            </form>
        </div>
    )
}

export default ResetPassword;