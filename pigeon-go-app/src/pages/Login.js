import React, { useState } from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
import logo from "../images/logo.jpg"
import { auth, provider } from "../firebase"
import { useStateValue } from "../StateProvider"

function Login() {

    const [, dispatch] = useStateValue()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailSignInHandler = () => {
        auth.signInWithEmailAndPassword(email, password).then(result => {

        })
    }

    const googleSignInHandler = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: "SET_USER",
                user: result.user
            })
        })
    }

    return (
        <div className="login -flex">
            <img className="login__image" src={logo} alt="logo" />
            <div className="login__container -flex">
                <h1 className="f-b">Sign In</h1>
                <form className="-flex login__from">
                    <p className="mb-05 f-b">Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3 p-03" type="email" placeholder="Enter email" />
                    <p className="mb-05 f-b">Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3 p-03" type="password" placeholder="Enter password" />
                    <Button onClick={emailSignInHandler} className="mb-3 login__button login__emailSignIn" type="submit">Sign In</Button>
                    <small className="t-j mb-3">By signing-in you agree to refrain from defamatory, indecent, offensive, profane, discriminatory, misleading, unlawful or threatening comments.</small>
                    <Button onClick={googleSignInHandler} className="login__button login__googleSignIn --cursor">Sign In with Google</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
