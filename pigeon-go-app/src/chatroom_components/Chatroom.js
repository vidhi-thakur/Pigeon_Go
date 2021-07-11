import React, { useEffect, useState } from 'react'
import "./Chatroom.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import logo from "../images/logo.jpg"
import Message from "./Message"
import { useParams } from "react-router-dom";
import db from '../firebase';

function Chatroom() {

    const [messageInput, setMessageInput] = useState("")
    const [room, setRoom] = useState("")
    const { roomId } = useParams();

    useEffect(() => {
        if(roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot=>setRoom(snapshot.data().name))
        }    
        console.log("Room name >>>>>"+roomId)
    }, [roomId])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setMessageInput("")
    }
    return (
        <div className="chatroom -flex">
            <div className="chatroom__header -flex">
                <div className="-flex">
                    <Avatar src={roomId && `https://avatars.dicebear.com/api/avataaars/${roomId}.svg`} />
                    <div className="sidebarchat__info">
                        <h6 className="mb-0 sidebarchat__chatRoom">{room}</h6>
                        <p className="mb-0">Last active...</p>
                    </div>
                </div>
                <IconButton>
                    <SearchRoundedIcon className="_iconColor" />
                </IconButton>
            </div>

            <div className="chatroom__body">
                <Message name="VidhiThakur" message="First message" timestamp="3:50" />
                <Message name="Simi" message="Second message" timestamp="3:52" />
            </div>

            <form className="chatroom__footer chatroom__bg -flex">
                <input value={messageInput} onChange={(e)=>setMessageInput(e.target.value)} className="chatroom__input costum-border" placeholder="Type a message..." />
                <button className="chatroom__bg costum-border" onClick={onSubmitHandler} type="submit"><img className="chatroom__logo" src={logo} alt="Logo" /></button>
            </form>
        </div>
    )
}

export default Chatroom
