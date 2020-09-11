import React from 'react';
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth, createUserProfileDocument} from '../../Firebase/firebase.utils'
import './signup.scss'

const SignUpComponent = () => {

    const [displayName, setDisplayName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const handleDisplayName = (e) => {
        setDisplayName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName })
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }
        catch(error){
            console.log(error);
        }


    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleDisplayName} label="Display Name" required></FormInput>
                <FormInput type="email" name="email" value={email} onChange={handleEmail} label="Email" required></FormInput>
                <FormInput type="password" name="password" value={password} onChange={handlePassword} label="Password" required></FormInput>
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} label="Confirm Password" required></FormInput>
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
}

export default SignUpComponent;
