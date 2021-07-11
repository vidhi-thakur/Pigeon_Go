import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';
import logo from "../images/logo.jpg"
import { auth, provider } from "../firebase"
import { useStateValue } from "../StateProvider"

function Login() {

        const [ ,dispatch] = useStateValue()

        const signInHandler = () => {
            auth.signInWithPopup(provider).then(result => {dispatch({
                type: "SET_USER",
                user: result.user
            })})
        }

        return (
            <div className="login">
                <div className="login__container -flex">
                    <img className="login__image" src={logo} alt="logo" />
                    <Button onClick={signInHandler} className="login__button">Sign In with Google</Button>
                </div>
            </div>
        )
    }

export default Login
