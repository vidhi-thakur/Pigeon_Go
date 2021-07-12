import React, { useEffect, useState } from 'react'
import "./Chatroom.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import logo from "../images/logo.jpg"
import Message from "./Message"
import { useParams } from "react-router-dom";
import db from '../firebase';
import { useStateValue } from "../StateProvider"
import homeLogo from "../images/homeLogo.svg"
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function Chatroom({ firstPage }) {

    const [{ user }] = useStateValue()

    const [messageInput, setMessageInput] = useState("")
    const [room, setRoom] = useState("")
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => setRoom(snapshot.data().name))
        }
        console.log("Room name >>>>>" + roomId)
    }, [roomId])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setMessageInput("")
    }
    return (
        <div className="chatroom -flex">
            <div className="chatroom__header -flex">
                <div className="-flex">
                    <Avatar src={roomId ? `https://avatars.dicebear.com/api/avataaars/${roomId}.svg` : `${user.photoURL}`} />
                    {!firstPage && <div className="sidebarchat__info">
                        <h6 className="mb-0 sidebarchat__chatRoom">{room}</h6>
                        <p className="mb-0">Last active...</p>
                    </div>}
                </div>
                <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                            Search chats
                        </Tooltip>
                    }
                >
                    <IconButton>
                        <SearchRoundedIcon className="_iconColor" />
                    </IconButton>
                </OverlayTrigger>

            </div>

            <div className={firstPage ? "chatroom__firstpage" : "chatroom__body"}>
                {!firstPage ? (<div>
                    <Message name="VidhiThakur" message="First message" timestamp="3:50" />
                    <Message name="Simi" message="Second message" timestamp="3:52" />
                </div>) : (
                    <div className="firstpage--info -flex">
                        <img className="firstpage--logo" src={homeLogo} alt="welcome logo" />
                        <h1>Welcome!</h1>
                        <h3>Create a new room or open previous chats</h3>
                    </div>
                )}

            </div>

            <form className="chatroom__footer chatroom__bg -flex">
                <input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className="chatroom__input costum-border" placeholder="Type a message..." />
                <button className="chatroom__bg costum-border" onClick={onSubmitHandler} type="submit"><img className="chatroom__logo" src={logo} alt="Logo" /></button>
            </form>
        </div>
    )
}

export default Chatroom
