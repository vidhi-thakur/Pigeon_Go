import React from 'react'
import "./SidebarChat.css"
import { Avatar, Link } from '@material-ui/core';

function SidebarChat({ id, title, lastMessage }) {

    return (
        <Link style={{textDecoration: "none", color: "black"}} to={`/rooms/${id}`}>
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
