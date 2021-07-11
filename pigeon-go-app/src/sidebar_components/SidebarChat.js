import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core';

function SidebarChat({id, title, lastMessage}) {

    let seed = Math.random();
    return (
        <div className="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarchat__info">
                <h6 className="mb-0 sidebarchat__chatRoom">{title}</h6>
                <p className="mb-0">{lastMessage}</p>
            </div>
        </div>
    )
}

export default SidebarChat
