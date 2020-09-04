import React from 'react'
import FormInput from '../FormInput/FormInput'
import './signIn.scss'
import CustomButton from '../CustomButton/CustomButton'

const SignIn = () => {

    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('')
        setPassword('')
    }

    return (
        <div className="sign_in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} onChange={handleEmail} label="email" required/>
                
                <FormInput name="password" type="password" value={password} onChange={handlePassword} label="password" required/>
               
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    )
}
 
export default SignIn; 
