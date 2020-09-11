import React from 'react'
import './SignInAndSignUp.scss'
import SignIn from "../../Components/Sign_In/SignIn"
import SignUpComponent from "../../Components/SignUp/SignUpComponent"

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
           <SignIn/>
           <SignUpComponent/>
        </div>
    )
}

export default SignInAndSignUp;
