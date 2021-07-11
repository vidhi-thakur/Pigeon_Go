import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom"

function SidebarChat({ id, title, lastMessage }) {

    return (
        <Link to={`/rooms/${id}`} style={{textDecoration: "none", color: "black"}} >
            <div className="sidebarchat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`} />
                <div className="sidebarchat__info">
                    <h6 className="mb-0 sidebarchat__chatRoom">{title}</h6>
                    <p className="mb-0">{lastMessage}</p>
                </div>
            </div>
        </Link>

    )
}

export default SidebarChat
