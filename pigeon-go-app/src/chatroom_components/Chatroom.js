import React from 'react'
import "./Chatroom.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import logo from "../images/logo.jpg"
import Message from "./Message"

function Chatroom() {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className="chatroom -flex">
            <div className="chatroom__header -flex">
                <Avatar />
                <IconButton>
                    <SearchRoundedIcon className="_iconColor" />
                </IconButton>
            </div>

            <div className="chatroom__body">
                <Message name="VidhiThakur" message="First message" timestamp="3:50" />
                <Message name="Simi" message="Second message" timestamp="3:52" />
            </div>
            
            <form className="chatroom__footer chatroom__bg -flex">
                <input className="chatroom__input costum-border" placeholder="Type a message..." />
                <button className="chatroom__bg costum-border" onClick={onSubmitHandler} type="submit"><img className="chatroom__logo" src={logo} alt="Logo" /></button>
            </form>
        </div>
    )
}

export default Chatroom
