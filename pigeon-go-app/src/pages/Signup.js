import React, { useState } from 'react'
import "./Signup.css"
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import db, { auth } from "../firebase"

function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let history = useHistory()

    const emailSignUpHandler = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((result) => {
            history.push("/");
            result.user.updateProfile({
                displayName: username
            })
        }).catch((error) => alert(error.message))
    }

    return (
        <div className="login__container register__container -flex">
            <h1 className="f-b mt-3">Register</h1>
            <form className="-flex login__from">
                <p className="mb-05 f-b">User Name</p>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="mb-3 p-03" type="email" placeholder="Enter email" />
                <p className="mb-05 f-b">Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3 p-03" type="email" placeholder="Enter email" />
                <p className="mb-05 f-b">Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3 p-03" type="password" placeholder="Enter password" />
                <small className="t-j mb-3">By signing-in you agree to refrain from defamatory, indecent, offensive, profane, discriminatory, misleading, unlawful or threatening comments.</small>
                <Button onClick={emailSignUpHandler} className="mb-3 login__button login__emailSignIn" type="submit">Sign In</Button>
            </form>
        </div>
    )
}

export default Signup
